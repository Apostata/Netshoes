import React from 'react';
export default class ItemList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {selectedSize} = this.props;
        let {classe} = this.props;

        
        return(
            <li className={classe} onClick={()=>{selectedSize(this.props.size)}}>{this.props.size}</li>
        )
    }
}