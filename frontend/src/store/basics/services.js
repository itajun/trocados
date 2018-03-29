import { axiosInstance } from '../rest'

export const fetchCategories = () => {
    return axiosInstance.get('/categories')
    .then(res => res.data._embedded.categories);
};

export const removeCategory = id => {
    return axiosInstance.delete('/categories/' + id)
};

export const addCategory = category => {
    return axiosInstance.post('/categories', category)
};

export const updateCategory = category => {
    return axiosInstance.put('/categories', category)
};