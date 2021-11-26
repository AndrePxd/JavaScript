const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = '/api/usuarios';
        this.authPath = '/api/auth';

        //Middlewares
        this.middlewares();


        //Rutas de mi aplicacion

        this.routes();
    
       
    }
    middlewares(){

        this.app.use(cors());
        this.app.use(express.json());



        this.app.use(express.static('public'));
    }

routes(){
 this.app.use( this.authPath, require('../routes/auth'));
 this.app.use(this.usariosPath,require('../routes/usuarios'));  
this.app.use( '', require('../routes/routes')); 

}



listen(){
    this.app.listen(this.port,()=>{
        console.log('Servidor corriendo en el puerto',this.port);
    });
}


}
module.exports=Server;