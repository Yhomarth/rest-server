
const { request , response } = require('express')

const usuariosGet = (req = request, res = response) => {

    // obtener los query params 
    const {  q, apikey, nombre } = req.query;

    res.json({
        'mensaje' : 'metodo GET ejecutadod',
        q,
        apikey,
        nombre
    });

}

const usuariosPost = (req = request, res = response) => {

    const { nombre } = req.body; 

   

    res.status(201).json({
        'mensaje' : 'metodo POST ejecutado',
        nombre
    });

} 

const usuariosPut = (req = request, res = response) => {

    const {id} = req.params;

    res.status(201).json({
        'mensaje' : 'metodo PUT - usuario actualizado',
        id
    });

} 


const usuariosPatch = (req = request, res = response) => {

    res.json({
        'mensaje' : 'metodo patch ejecutado'
    });

} 


const usuariosDelete = (req = request, res = response) => {

    res.json({
        'mensaje' : 'metodo delete ejecutado'
    });

} 



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}