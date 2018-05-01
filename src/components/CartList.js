import React from 'react';
import {connect} from 'react-redux';

import Product from './Product';

import ShoppingApi from "../api/api";

export class CartList extends React.Component {
   
    render(){
        let {products} = this.props;
        
        let renderCart = () => {
            if(products.length > 0){
                return products.map((product)=>{
                    return <Product key={product.id} product={product}/>
                })
            }
        }

        return(
            <div className="cart-resume">
                {renderCart()}
            </div>
        )
    }
};

export default connect(
	(state)=>{
		return state;
	}
)(CartList);//conecta ao store e retorna apenas todos do state, passando todos para a props do TodoList.
