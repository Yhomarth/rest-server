
const express = require('express');
const cors = require('cors')

class Server {

     app = express();
     port = process.env.PORT || 3000;
     usuarioPath = '/usuarios'


     constructor(){

        //middlewares de la aplicación
         this.middlewares();

         //rutas de la aplicación
         this.routes();
     }

     routes(){

        this.app.use(  this.usuarioPath, require('../routes/usuarios')   );


        this.app.use('**', (req, res)=> {
            res.status(404).json({
                'mensaje' : 'Recurso no encontrado' 
            })
        });

 

     }

     middlewares(){

        //CORS 
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use( express.json() );

        //directorio público
        this.app.use(  express.static('public')  );

        // this.app.use('**', (req, res)=> {
        //     res.json({
        //         'mensaje' : 'Recurso no encontrado'
        //     })
        // });

     }




     listen(){
         this.app.listen(  this.port, ()=> {
            console.log(`Corriendo en el puerto ${this.port}`);
         })
     }

}

module.exports = Server;