//cliente knex

const { GoogleAuth } = require('google-auth-library');

//const { googleVerify } = require('../helpers/google-verify');

const databaseService = () => {

    const knex = require('knex')({
        client : 'mssql',
        connection:{
            server : process.env.DB_HOST,
            user: process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
        
    });

    //Nombre de la tabla
   // const table = 'administrador';
    

   const table = 'administrador';

   const crearAdmin = ({cod_admin, nombre, correo,user,password,tipo_admin}) =>{ //Deconstruyendo json
    return knex(table).insert({
        cd: cod_admin,
        nombre : nombre,
        correo: correo,
        user:user,
        password:password,
        tipo_admin:tipo_admin
    });//retorna una promesa
};

    const leer = () =>{
        return knex(table).select();
    };

    return {crearAdmin, leer};
    

};
//Exportamos a toda la aplicacion
module.exports = {
    databaseService
};