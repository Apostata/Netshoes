import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../redux/actions";
import VariationList from './VariationList';

import ShoppingApi from "../api/api";

const imagePath = require("../images/familia.jpg")

export class Product extends React.Component{
    constructor(props){
        super(props)
    }

    addToCart(){
        let {dispatch} = this.props;
        let {product} = this.props;

        dispatch(actions.addCartItem(product))
    }

    removeFromCart(){
        let {dispatch} = this.props;
        let {product} = this.props;

        dispatch(actions.removeCartItem(product))
    }

    render(){
        let {product} = this.props;
        let renderInstallments = ()=>{
            let installmentPrice = (product.price / product.installments).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2});
            return(
                <div className="installments">
                    <span className="or">ou</span>
                    <strong className="installmentNum">{product.installments}</strong>
                    <span className="of">de</span>
                    <strong className="installmentPrice">
                        <span className="currency-format">{product.currencyFormat}</span>
                        <span className="price">{installmentPrice}</span>
                    </strong>
                </div>
            )
        };

        return(
            <div className="col-xs-12 col-sm-6 col-md-4 product">
                <figure>
                    <img src={imagePath} />
                </figure>
                <div className="product-data">
                    <div className="removeFromCart">
                        <a className="add" onClick={()=>this.removeFromCart()}>Excluir</a>
                    </div>
                    <h3>
                        <span>{product.title}</span>
                        <p>{product.descriotion}</p>
                    </h3>
                    <div className="price-data">
                        <div className="current-price">
                            <span className="currency-format">{product.currencyFormat}</span>
                            <span className="price">{product.price.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2})}</span>
                        </div>
                        {renderInstallments()}
                        <VariationList variations={product.availableSizes}/>
                        <div className="addTocart">
                            <a className="add" onClick={()=>this.addToCart()}>Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect()(Product);