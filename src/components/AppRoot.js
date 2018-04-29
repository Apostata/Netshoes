import React from 'react';
import Shelf from './Shelf';

export default class AppRoot extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
            <div>
                <h1>Teste De Carregamento do React</h1>
                
                <div className="netshoes-wrapper">
                    <Shelf products={this.props.products}/>
                </div>
            </div>    
        )
    }
}
