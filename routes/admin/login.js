var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');


router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout' //indicamos una propiedad nueva, de que el js de login va a usar el layout de admin.

  });
}) //view/admin/login.hbs

//capturar los datos mediante el método post
router.post('/', async function(req,res,next){

    try{
        console.log(req.body);
        var usuario = req.body.usuario; //captura el dato usuario
        var password = req.body.password; //captura el dato contraseña
        //una vez capturados los datos hay que conectar con el archivo que conecta con la base de datos que es el usuariosModel: 

        var data = await usuariosModel.getUserAndPassword(usuario,password);

        if( data != undefined){
          req.session.id_usuario = data.id;
          req.session.nombre = data.usuario;
          
          res.redirect('/admin/promociones')
        }else{
          res.render('admin/login',{
            layout:'admin/layout',
            error:true
          })
        }

    }catch(error){
      console.log(error)
    }
});


module.exports = router;
