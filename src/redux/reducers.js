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
        
        case 'ADD_SAME_CART_ITEM':
            return state.map((product)=>{
            
            if(product.id === action.product.id){
                let updatedQtd = product.qtd + 1;	
            
                return {
                    ...product,
                    qtd: updatedQtd,
                };
            }
            else{
                return product
            }
        });
        
        case 'REMOVE_CART_ITEM':
            return state.filter(({id}) =>{
                return id !== action.product.id
            });
        
       

        default:
            return state;
    }
}

export const toogleCartReducer = (state=false, action)=>{
     switch(action.type){
        case 'TOGGLE_SHOW_CART':
            return !state;
            
        
        default:
            return state;
        
    }
}

export const totalCartReducer = (state=0, action)=>{
    switch(action.type){
        case 'SET_TOTAL_IN_CART':
            return state = action.qtd;

        case 'ADD_TOTAL_IN_CART':
            return state + 1;
            

        case 'REMOVE_TOTAL_IN_CART':
            return state - action.qtd;
            
        
        default:
            return state;
        
    }
}