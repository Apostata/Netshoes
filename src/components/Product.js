import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../redux/actions";
import VariationList from './VariationList';

import ShoppingApi from "../api/api";

const imagePath = require("../images/familia.jpg")

export class Product extends React.Component{
    constructor(props){
        super(props)

        this.selectedProduct = this.props.product;
        this.selectedSize;

        this.state={
            isSizeSelected: false,
            selectedSize: ""
        }
    }

    onClickVariation(size){
        let {product} = this.props;
        let {selectedProduct} = this;
        let {selectedSize} = this;

        console.log(size);

        selectedSize =  ShoppingApi.filterSelectedSize(size, product);

        this.selectedProduct ={
            ...selectedProduct,
            id: product.id + selectedSize,
            availableSizes : selectedSize
        };

        this.selectedSize = size;
        
        this.setState({
            isSizeSelected: true,
            selectedSize: this.selectedSize
        })
    }

    addToCart(){
        let {dispatch} = this.props;
        let {product} = this.props;
        let {selectedProduct} = this;
        let {selectedSize} = this;
        let alreadyInCart = ShoppingApi.verifyAlreadyInCart(selectedSize, selectedProduct);

        if(alreadyInCart){
           dispatch(actions.addSameCartItem(selectedProduct))
        }
        else{
            selectedProduct = {
                ...selectedProduct,
                qtd: 1
            };
            dispatch(actions.addCartItem(selectedProduct))
        }
        console.log(selectedProduct);
        
    }

    removeFromCart(){
        let {dispatch} = this.props;
        let {product} = this.props;

        dispatch(actions.removeCartItem(product))
    }

    render(){
        let {product} = this.props;
        let {isSizeSelected} = this.state;
        let {selectedSize} = this.state;

        let renderQtd = () =>{
            if(product.qtd){
                return(<div className="qtd-wrapper">Quantidade: {product.qtd}</div>)
            }
        };

        let renderInstallments = () =>{
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

        let renderSizeSelectedMessae = () =>{
            if(!isSizeSelected){
                return(
                    <p>Selecione um tamanho!</p>
                )
            }
        }

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
                        <VariationList variations={product.availableSizes} selectedSizes={this.onClickVariation.bind(this)} variationSelected={selectedSize}/>
                        {renderQtd()}    
                        <div className="addTocart">
                            <a className="add" onClick={
                                ()=>{
                                    if(isSizeSelected){
                                        this.addToCart()
                                    }
                                }
                            }>Adicionar ao carrinho</a>
                            {renderSizeSelectedMessae()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect()(Product);