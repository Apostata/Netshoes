import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../redux/actions";

export class CartButton extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cart: this.props.cart,
            toggleCart: this.props.toggleCart
        }
    }

    showHideCart(){
        console.log(this.props, this.state);

        let {dispatch} = this.props;
        let {toggleCart} = this.state;
        console.log(toggleCart);
        dispatch(actions.toggleShowCart(toggleCart))
        
    }

    render(){
        let {total} = this.props;

        return(
            <div className="cart-btn-wrapper">
                <a className="btn-cart" onClick={()=>this.showHideCart()}>Abir/Fechar Carrinho</a>
                <span className="total">{total}</span>
            </div>
        )
    }
}
export default connect()(CartButton);