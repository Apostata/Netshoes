export const productsReducer = (state =[], action)=>{
    switch(action.type){
        case 'GET_CART':
            return [
                ...state,
                ...action.products
            ];
        default:
            return state;
    }
};