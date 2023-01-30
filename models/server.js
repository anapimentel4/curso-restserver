const express = require('express')
const cors = require('cors')



class Server{

constructor(){
    this.app = express();
    this.port= process.env.PORT;
    this.userPath= ('/api/usuarios');
//middelwares: funcion que siempre va a ejecuatarse cuando nosotros levantemos el sevidor 
    this.middlewares();

    this.routes();
}




middlewares(){

    
    this.app.use(cors() );

    this.app.use( express.json() );

    this.app.use(express.static('public') );
}



// crear metodo para manejar las rutas
routes(){
    this.app.use(this.userPath, require('../routes/usuarios'))
}


listen(){
    
this.app.listen(this.port, ()=>{
    console.log('uso del puerto', this.port);
})
}
  

}


module.exports = Server;