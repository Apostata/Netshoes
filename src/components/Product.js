import React from 'react';
import VariationList from './VariationList';

const imagePath = require("../images/familia.jpg")

export default class Product extends React.Component{
    constructor(props){
        super(props)
    }

    addToCart(id){
        console.log(id);
    }

    render(){
        let renderInstallments = ()=>{
            let installmentPrice = (this.props.price / this.props.installments).toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2});
            return(
                <div className="installments">
                    <span className="or">ou</span>
                    <strong className="installmentNum">{this.props.installments}</strong>
                    <span className="of">de</span>
                    <strong className="installmentPrice">{this.props.currencyFormat}{installmentPrice}</strong>
                </div>
            )
        };

        return(
            <div className="product">
                <figure>
                    <img src={imagePath} width='100' height='100'/>
                </figure>
                <div className="product-data">
                    <h3>
                        <span>{this.props.title}</span>
                        <p>{this.props.descriotion}</p>
                    </h3>
                    <div className="price-data">
                        <div className="price">
                            {this.props.currencyFormat}
                            {this.props.price.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2})}
                            {renderInstallments()}
                            <VariationList variations={this.props.availableSizes}/>
                            <div className="addTocart">
                                <a className="add" onClick={()=>this.addToCart(this.props.id)}>Adicionar ao carrinho</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};