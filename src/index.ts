
import MySQL from './mysql/mysql';
import router from './router/router';
import Server from './server/server';


const server = Server.init( 3000 );
server.app.use( router);

// se crea nueva instancia de BDD para conectarse a la bdd, el constructor de la bse hace el trabajo
// const mysql = new MySQL(); // esta línea se puede sustituir por esta

// no es necesario utilizarla aqui, ya esta optimizada y se usa en cada parte que se necesite
//MySQL.instance; // esta conexion evita multiples conexiones de bdd

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');
});