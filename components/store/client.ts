import { create } from 'apisauce';

const api = create({
    baseURL: 'https://fakestoreapi.com/products'
});


export const getProducts = () => { return api.get< Array < { id: Number, title: String, price: Number, description: String, category: String, image: String, rating: { rate: Number, count: Number } } >>('')}
