export const allCategories = (state) => (state.categories.all);

export const allCategoryTree = (state) => {
    const all = allCategories(state);
    if (all == null) {
        return all;
    }
    return categoryTree(all);
};

export const incomeTree = (state) => {
    const all = allCategories(state);
    if (all == null) {
        return all;
    }
    return categoryTree(all.filter(item => item.type === "INCOME"));
};

export const expenseTree = (state) => {
    const all = allCategories(state);
    if (all == null) {
        return all;
    }
    return categoryTree(all.filter(item => item.type === "EXPENSE"));
};

function categoryTree(categories) {
    let result = {};
    categories.forEach(element => {
        if (element.parent == null) {
            result[element.id] = {
                ...element,
                children: []
            };
        } else {
            result[element.parent].children.push(element);
        }
    });
    return result;
}