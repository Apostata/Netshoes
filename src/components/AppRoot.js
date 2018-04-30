import React from 'react';
import Shelf from './Shelf';

import {connect} from 'react-redux';
import CartList from './CartList';
import * as actions from "../redux/actions";
import ShoppingApi from "../api/api";

export class AppRoot extends React.Component {
    constructor(props){
        super(props);
        let cart = this.props;
		this.state={
            cart: ShoppingApi.getCart()
        }
    }
    

    componentWillReceiveProps(nextProps){
        this.setState({
            cart: nextProps.cart
        });
    }
    
    componentDidUpdate(){
        ShoppingApi.setCart(this.state.cart);
    }

    render(){
        //console.log(this.state);
        let {products} = this.props;
        let {cart} = this.state;

        return(
            <div>
                <h1>Teste De Carregamento do React</h1>
                
                <div className="netshoes-wrapper">
                    <CartList  products={cart} />
                    <Shelf products={products} />
                </div>
            </div>    
        )
    }
};

export default connect(
    (state)=>{
		return state;
	}
)(AppRoot);