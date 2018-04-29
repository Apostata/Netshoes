import React from 'react';
import Product from './Product';

export default class Shelf extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render(){
        let renderShelf = () => {
            if(this.props.products.length > 0){
                return this.props.products.map((product)=>{
                    return <Product key={product.id}{...product}/>
                })
            }
        }

        return(
            <div className="prateleira">
                {renderShelf()}
            </div>
        )
    }
};