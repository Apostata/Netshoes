import express from 'express';
const server = express();
import path from 'path';

if(process.env.NODE_ENV !== "production"){
    const webpack = require('webpack');
    const config = require("../../config/webpack.dev.js");
    const compiler = webpack(config);

    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
    const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, config.devServer);

    server.use(webpackDevMiddleware); //usar as configurações de devserver do webpack config
    server.use(webpackHotMiddleware); //usar live reload USAR SEMPRE DEPOIS DO DEV MIDDLEWARE
    process.env.NODE_ENV = "development";
}

const expressStaticGzip = require('express-static-gzip');
server.use(
    expressStaticGzip("dist", {
            enableBrotli:true
        }
    )
);

server.get("/products", (req, res)=>{
    const products = require('./products/products.json');
    res.send(products);
});


const PORT = process.env.PORT || 9001;
server.listen(PORT, ()=>{
    console.log(`Servidor funcionando na porta ${PORT} ${process.env.NODE_ENV}`);
});