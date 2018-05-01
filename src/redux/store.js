import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import {cartReducer, toogleCartReducer} from "./reducers"
import thunk from "redux-thunk"

const preloadedState = {}


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

export default initialState => {
    let reducer = combineReducers({
		toggleCart: toogleCartReducer,
        cart: cartReducer
    });
    
    const store = createStore(reducer, preloadedState, enhancer)
    if (module.hot) {
        module.hot.accept("./reducers", () =>{
        store.replaceReducer(require("./reducers"))
        })
    }
  return store;
}