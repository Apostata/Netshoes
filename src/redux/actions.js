export const addCart = (products)=>{
    return {
		type: 'ADD_CART',
		products
	}
};

export const addCartItem = (product)=>{
    return{
        type: 'ADD_CART_ITEM',
        product
    }
};

export const removeCartItem =(product)=>{
    return{
        type: 'REMOVE_CART_ITEM',
        product
    }
};

export const addSameCartItem = (product)=>{
    return{
        type: 'ADD_SAME_CART_ITEM',
        product
    }
}

export let toggleShowCart = ()=>{
	return{
		type:'TOGGLE_SHOW_CART'
	}
};