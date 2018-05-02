import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from "./components/AppRoot";
import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import ShoppingApi from "./api/api";
import * as actions from "./redux/actions";

const store = configureStore({});
function render(Component, products){
    ReactDOM.render( //colocar ainda a store
        <Provider store={store}>
            <AppContainer>
                <Component products={products}/>
            </AppContainer>
        </Provider>,
        document.getElementById("react-root")
    )
};
ShoppingApi.fetchProducts()
    .then((response)=>{
        let products=[];
        response.data.products.forEach(function(element) {
           products.push(element);
        }, this);

        store.subscribe(()=>{ 
            let state = store.getState(); 
        });

        let cartItens = ShoppingApi.getCart()
        store.dispatch(actions.addCart(cartItens));
        render(AppRoot, products);
    }
);
    


if(module.hot){
    module.hot.accept("./components/AppRoot.js", ()=>{
        const NewAppRoot = require("./components/AppRoot.js").default;
        render(NewAppRoot);
    })
}