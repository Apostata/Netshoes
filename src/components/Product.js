import React from 'react';
import {connect} from 'react-redux';
import * as actions from "../redux/actions";
import VariationList from './VariationList';

import ShoppingApi from "../api/api";


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
            id: String(product.id) + selectedSize,
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
        dispatch(actions.addTotalInCart())        
    }

    removeFromCart(){
        let {dispatch} = this.props;
        let {product} = this.props;

        dispatch(actions.removeCartItem(product));
        dispatch(actions.removeTotalInCart(product.qtd))
    }

    render(){
        let {product} = this.props;
        let {isSizeSelected} = this.state;
        let {selectedSize} = this.state;

        let renderImages= (id) =>{
            let strId = String(id).toLowerCase();
            let newId;

            switch(strId){
                case "0":
                case "0s":
                case "0g":
                case "0gg":
                case "0ggg":
                case "4":
                case "4s":
                case "4g":
                case "4gg":
                case "4ggg":
                    newId = 0;
                    break;
                
                case "1":
                case "1s":
                case "1g":
                case "1gg":
                case "1ggg":
                case "15":
                case "15s":
                case "15g":
                case "15gg":
                case "15ggg":
                    newId = 1;
                    break;
               
                case "2":
                case "2s":
                case "2g":
                case "2gg":
                case "2ggg":
                    newId = 2;
                    break;
               
                case "3":
                case "3s":
                case "3g":
                case "3gg":
                case "3ggg":
                    newId = 3;
                    break;

                case "5":
                case "5s":
                case "5g":
                case "5gg":
                case "5ggg":
                    newId = 5;
                    break;

                case "6":
                case "6s":
                case "6g":
                case "6gg":
                case "6ggg":
                    newId = 6;
                    break;
                
                case "7":
                case "7s":
                case "7g":
                case "7gg":
                case "7ggg":
                    newId = 7;
                    break;
              
                case "8":
                case "8s":
                case "8g":
                case "8gg":
                case "8ggg":
                    newId = 8;
                    break;
                
                case "9":
                case "9s":
                case "9g":
                case "9gg":
                case "9ggg":
                    newId = 9;
                    break;

                case "10":
                case "10s":
                case "10g":
                case "10gg":
                case "10ggg":
                    newId = 10;
                    break;

                case "11":
                case "11s":
                case "11g":
                case "11gg":
                case "11ggg":
                    newId = 11;
                    break;

                case "12":
                case "1240":
                case "1243":
                    newId = 12;
                    break;                

                case "13":
                case "1341":
                    newId = 13;
                    break;

                case "14":
                case "14s":
                case "14g":
                case "14gg":
                case "14ggg":
                    newId = 14;
                    break;

                case "16":
                case "16s":
                case "16g":
                case "16gg":
                case "16ggg":
                    newId = 16;
                    break;          
                
            }
            console.log(newId);
            return(
                <figure>
                    <img src={require(`../images/${newId}.jpg`)} />
                </figure>
            )
        }

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
                { renderImages(product.id) }
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