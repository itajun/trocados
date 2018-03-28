let categories = [
    {
        id: 1,
        type: "income",
        name: "income 1"
    },
    {
        id: 2,
        type: "income",
        name: "income 1.1",
        parent: 1
    },
    {
        id: 3,
        type: "income",
        name: "income 1.2",
        parent: 1
    },
    {
        id: 4,
        type: "income",
        name: "income 1.3",
        parent: 1
    },
    {
        id: 5,
        type: "income",
        name: "income 2"
    },
    {
        id: 6,
        type: "income",
        name: "income 2.1",
        parent: 5
    },
    {
        id: 7,
        type: "expense",
        name: "expense 1"
    },
    {
        id: 8,
        type: "expense",
        name: "expense 1.1",
        parent: 7
    }
]

let nextCategoryId = categories.length + 1;

export const fetchCategories = () => {
    // TODO Fetch from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 0)
    })
};

export const removeCategory = id => {
    // TODO server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categories = categories.filter(item => item.id !== id);
            resolve()
        }, 1000)
    })
};

export const addCategory = category => {
    // TODO server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categories.push({...category, id: nextCategoryId++});
            resolve()
        }, 1000)
    })
};
