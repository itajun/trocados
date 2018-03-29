package au.ivj.trocados.repository;

import au.ivj.trocados.entities.Category;
import au.ivj.trocados.repository.ext.CategoryRepositoryCustom;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long>, CategoryRepositoryCustom {
}