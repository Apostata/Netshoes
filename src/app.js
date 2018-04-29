import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from "./components/AppRoot";
import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { fetchProducts, getCart} from "./redux/actions";

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
store.dispatch(fetchProducts())
    .then((response)=>{
        /*if(!localStorage.getItem('cart')){
            localStorage.setItem('cart',
                JSON.stringify(
                    store.dispatch(getCart())
                )
            );
        }*/
        render(AppRoot, response.data.products);
    }
);
    


if(module.hot){
    module.hot.accept("./components/AppRoot.js", ()=>{
        const NewAppRoot = require("./components/AppRoot.js").default;
        render(NewAppRoot);
    })
}