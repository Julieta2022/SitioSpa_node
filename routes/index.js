var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var promocionesModel = require('../models/promocionesModel');


/* GET home page. */
router.get('/', async function (req, res, next) {
  var promociones = await promocionesModel.getPromocionesfront();

  res.render('index', {
    promociones
  });
})


router.post('/', async function (req, res, next) {
  // console.log(req.body)

  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var comentarios = req.body.comentarios;
  // console.log(req.body.nombre)

  var obj = {
    to: 'jepailler@gmail.com',
    subject: 'Contacto desde la página web',
    html: nombre + " se contactó a través de la web y quiere más información a este correo: " + email + "<br> Su teléfono es: " + tel + ". Su comentario es: " + comentarios + "."//cuerpo del mensaje que va a llegar de aviso
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); //finaliza el transport

  var info = await transport.sendMail(obj); //mismo nombre que la variable creada anteriormente "transport"

  res.render('', {
    message: 'Su mensaje ha sido enviado correctamente'
  })

}); //finaliza router.post


module.exports = router;


