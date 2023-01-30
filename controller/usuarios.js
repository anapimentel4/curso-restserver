const {response, request}=  require('express');

const usuariosGet = (req =request, res= response)=> {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg:'esto es un metodo get controller',
        q, 
        nombre,
        apikey
  })

}
const usuariosPut = (req, res = response) => {
   const id = req.params.id;
    res.json({
        msg:'esto es un metodo put controller ',
        id
  });
}

 const usuariosPost = (req, res= response)=> {
    const body = req.body;

    res.json({
    msg:'post api',   
    body  
  })
 }

const usuariosDelete = (req, res = response)=> {
    res.json({
        msg:'esto es un metodo delete- controller'
  });
}
  const usuariosPatch = (req, res= response)=> {
    res.json({
        msg:'esto es un metodo patch-controller'
  })
}


  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
  }