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

export const toggleShowCart = ()=>{
	return{
		type:'TOGGLE_SHOW_CART'
	}
};

export const addTotalInCart = ()=>{
	return{
		type:'ADD_TOTAL_IN_CART'
	}
};

export const removeTotalInCart = (qtd)=>{
	return{
        type:'REMOVE_TOTAL_IN_CART',
        qtd
	}
};

export const setTotalIncart = (qtd)=>{
    return{
        type: 'SET_TOTAL_IN_CART',
        qtd
    }
};