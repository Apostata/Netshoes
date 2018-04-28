import React from 'react';
//import MarkdownData from "../../data/post.md";
const imagePath = require("../images/familia.jpg")

export default class AppRoot extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
        console.log(this.props.products);
    }

    render(){
        return(
            <div className="profile">
                <img src={imagePath} />
                <h1>Teste De Carregamento do React</h1>
                
                <div className="netshoes-wrapper">
                    <p>Hello Netshoes</p>
                </div>
            </div>    
        )
    }
}
