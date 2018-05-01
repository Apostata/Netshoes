import React from 'react';
import Shelf from './Shelf';
import CartList from './CartList';
import CartButton from './CartButton';

import {connect} from 'react-redux';
import * as actions from "../redux/actions";
import ShoppingApi from "../api/api";

const imagePath = require("../images/logo.png");

export class AppRoot extends React.Component {
    constructor(props){
        super(props);
        let cart = this.props;
		this.state={
            cart: ShoppingApi.getCart(),
            togglecart: false
        }
    }
    

    componentWillReceiveProps(nextProps){
        this.setState({
            cart: nextProps.cart,
            toggleCart: nextProps.toggleCart
        });
    }
    
    componentDidUpdate(){
        console.log(this.state.cart);
        console.log(this.state.toggleCart);
        ShoppingApi.setCart(this.state.cart);
    }
    

    render(){
        //console.log(this.state);
        let {products} = this.props;
        let {cart} = this.state;
        let {toggleCart} = this.state;

        let todoCartClassName = toggleCart ? 'store-wrapper cart-opened' : 'store-wrapper';

        return(
            <div>        
                <div className= {todoCartClassName}>
                    <header className="header-wrapper">
                        
                        <div className="header-top-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="hidden-xs hidden-sm col-sm-offset-7 col-sm-5 header-institucional">
                                        <ul>
                                            <li><a href="#">Quem somos</a></li>
                                            <li><a href="#">Contato</a></li>
                                            <li><a href="#">Política de troca e devoução</a></li>
                                        </ul>
                                    </div>
                                </div>    
                            </div>    
                        </div>
                        <div className="header-mid-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="visible-xs col-xs-4 mobile-menu-wrapper">
                                        <a className="fakeMenuButton">Menu</a>
                                    </div>
                                    <div className="hidden-xs col-sm-5 menu-wrapper">
                                        <ul>
                                            <li>
                                                <a href="#">Masculino</a>
                                                <div className="main-sub">
                                                <ul>
                                                    <li><a href="#">Camisetas</a></li>
                                                    <li><a href="#">Shorts</a></li>
                                                    <li><a href="#">Calças</a></li>
                                                    <li><a href="#">Jaquetas</a></li>
                                                </ul>
                                                </div>
                                            </li>
                                            <li><a href="#">Feminino</a></li>
                                            <li><a href="#">Infantil</a></li>
                                            <li><a href="#">Acessórios</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-4 col-sm-2 logo-wrapper">
                                        <a className="logo-link">
                                            <img src={imagePath} />
                                        </a>
                                    </div>
                                    <div className="col-xs-4 col-sm-5 header-mid-content-wrapper">
                                        <div className="row">
                                            <div className="hidden-xs col-sm-6 search-wrapper">
                                                <form className="search-form">
                                                    <input className="search-field" type="text" />
                                                    
                                                    <button className="search-submit">Buscar<i className=".netshoes-magnifier"></i></button>
                                                </form>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-sm-offset-0 col-sm-6 cart-wrapper">
                                                <CartButton />
                                            </div>    
                                        </div>    
                                    </div>
                                </div>    
                            </div>    
                        </div>
                    </header>
                    <div className="cart-box-wrapper">
                        <CartButton />    
                        <CartList products={cart} />
                    </div>    

                    <div className="content-wrapper">
                        <div className="container">
                            <div className="row">
                                <Shelf products={products} />
                            </div>    
                        </div>    
                    </div>    
                </div>
            </div>    
        )
    }
};

export default connect(
    (state)=>{
		return state;
	}
)(AppRoot);