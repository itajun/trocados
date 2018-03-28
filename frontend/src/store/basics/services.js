export const fetchCategories = () => (
    // TODO Fetch from server
    new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            [
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
        )
    }, 0)
}));