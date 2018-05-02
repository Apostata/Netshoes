import axios from 'axios';

export default class productApi{
    static fetchProducts(){
        let productsEndPoint = "/products";
        let promise = axios.get(productsEndPoint);
        return promise;
    };

    static filterSelectedSize(size, product){
        return product.availableSizes.filter((seleCtedSize) =>{
            return seleCtedSize === size;
        });
    }

    static getCart(){
        let cart;
       
        if(!localStorage.getItem('cart')){
            cart = [];
            return cart;
        }
        else{
            let stringCart = localStorage.getItem('cart');
            cart = JSON.parse(stringCart);
            return cart;
        }               
    } 

    static verifyAlreadyInCart(size, product){
        let alreadyInCart = false;

        let cartProducts = this.getCart();
        let inCart = cartProducts.filter(({id}) =>{//se for mesmo id
            return id === product.id;
        });

        /*let sameSize = [];

        if(inCart.length > 0){
            sameSize = this.filterSelectedSize(size, inCart[0])
        }

        if(sameSize.length > 0){
            alreadyInCart = true
        }
        else{
            alreadyInCart = false;
        }*/

        if(inCart.length > 0){
            alreadyInCart = true;
        }
        else{
            alreadyInCart = false;
        }
        
        return alreadyInCart;
    }
    
    static setCart(products){
        localStorage.setItem('cart', JSON.stringify(products));
        return products;
    }
}