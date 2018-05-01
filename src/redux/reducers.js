export const cartReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD_CART':
            return [
                ...state,
                ...action.products
            ];
        case 'ADD_CART_ITEM':
            return [
                ...state,
                {
                    ...action.product
                }
            ];
        
        case 'REMOVE_CART_ITEM':
        return state.map((product)=>{
            if(product.id !== action.product.id){
                return product
            }
        });

        default:
            return state;
    }
}

export const toogleCartReducer = (state=false, action)=>{
     switch(action.type){
        case 'TOGGLE_SHOW_CART':{
            return !state;
            
        }
        default:{
            return state;
        }
    }
}