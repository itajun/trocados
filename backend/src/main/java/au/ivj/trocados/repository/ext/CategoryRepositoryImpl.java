package au.ivj.trocados.repository.ext;

import au.ivj.trocados.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

public class CategoryRepositoryImpl implements CategoryRepositoryCustom {
    @Autowired
    private EntityManager entityManager;

    @Transactional
    @Override
    public void delete(Long id) {
        Category category = entityManager.find(Category.class, id);

        if (category != null) {
            Long parentId = category.getParent();
            if (parentId == null) { // top level
                Long childrenCount = (Long) entityManager
                        .createQuery("select count(c) from Category c where c.parent = :parentId")
                        .setParameter("parentId", id)
                        .getSingleResult();

                if (childrenCount > 0) {
                    throw new IllegalArgumentException(String.format("Category has %d children", childrenCount));
                }
            }
        }

        entityManager.remove(category);
    }
}
