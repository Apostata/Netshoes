import React from 'react';
import Product from './Product';
import * as actions from "../redux/actions";

import {connect} from 'react-redux';

export class Shelf extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let {products} = this.props;
        let renderShelf = () => {
            if(products.length > 0){
                return products.map((product)=>{
                    return <Product key={product.id} product={product} />
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

export default connect(
    (state)=>{
		return state;
	}
)(Shelf);