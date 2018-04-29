import axios from 'axios';

export const fetchProducts = () =>(dispatch, getState)=>{
    let productsEndPoint = "/products";
    let promise = axios.get(productsEndPoint);
    return promise;
        
};

export const getProducts = (products) =>{
	return {
		type: 'GET_PRODUCTS',
		products
	}
};