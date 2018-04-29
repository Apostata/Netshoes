import React from 'react';
import ItemList from './ItemList';

export default class VariationList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let renderItemList = ()=>{
            if(this.props.variations.length > 0){
                return this.props.variations.map((variation, index)=>{
                    return <ItemList key={index} size={variation}/>;
                })
            }
        };

        return(
            <div className="variations">
                {renderItemList()}
            </div>    
        )
    }
}