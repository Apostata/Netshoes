import React from 'react';
import {connect} from 'react-redux';

import VariationList from './VariationList';
import * as actions from "../redux/actions";

import ShoppingApi from "../api/api";

const imagePath = require("../images/familia.jpg")

export class BuyButton extends React.Component{
    render(){
        return(
            <a className="add" onClick={()=>this.addToCart()}>Adicionar ao carrinho</a>
        )
    }
};
export default connect(
    (state)=>{
		return{
            cartProducts: state.cartProducts
        }
	}
)(Product);