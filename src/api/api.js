import axios from 'axios';

export default class productApi{
    static fetchProducts(){
        let productsEndPoint = "/products";
        let promise = axios.get(productsEndPoint);
        return promise;
    };

    static filterCartProducts(products, inCart){
		var cartProducts = products;
		//filter by show completed
		cartProducts = cartProducts.filter((product)=>{
			return product.inCart; 
		});
		
		return cartProducts;
    }

    static getCart(){
        let cart;
       
        if(!localStorage.getItem('cart')){
            cart = [];
        }
        else{
            let stringCart = localStorage.getItem('cart');
            cart = JSON.parse(stringCart);
        }
        
        return cart;       
    } 
    
    static setCart(products){
        localStorage.setItem('cart', JSON.stringify(products));
        return products;
    }
}