import React from 'react';
import ItemList from './ItemList';

export default class VariationList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let renderItemList = ()=>{
            let {selectedSizes} = this.props;
            let {variationSelected} = this.props;

            let renderSelected = (variation) =>{
                if(variationSelected === variation){
                    return "selected";
                }else{
                    return "";
                }
            }

            if(this.props.variations.length > 0){
                return this.props.variations.map((variation, index)=>{
                    return <ItemList key={index} size={variation} selectedSize={selectedSizes} selected={variationSelected} classe={renderSelected(variation)}/>;
                })
            }
        };

        return(
            <div className="variations">
                <ul>
                    {renderItemList()}
                </ul>    
            </div>    
        )
    }
}