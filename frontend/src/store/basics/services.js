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
                }
            ]
        )
    }, 0)
}));