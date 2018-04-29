import React from 'react';
export default class ItemList extends React.Component{
    constructor(props){
        super(props)
    }

    onClickVariation(size){
        console.log(size);
    }

    render(){
        return(
            <li onClick={()=>{this.onClickVariation(this.props.size)}}>{this.props.size}</li>
        )
    }
}