/*
Configuración de una clase que se puede utilizar en cualquier app para utilizar el 
puerto que se le indica.
*/

import express = require('express');
import path = require('path');

export default class Server {
    public app: express.Application;
    public port: number;

    constructor( puerto: number ) {
        this.port = puerto;
        this.app = express();
    }

    static init ( puerto: number ) {
        return new Server( puerto );
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static( publicPath ) );
    }

    start( callback: () => void ) {
        this.app.listen( this.port, callback); 
        this.publicFolder();       
    }


}