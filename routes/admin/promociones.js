var express = require('express');
var router = express.Router();
var promocionesModel = require('../../models/promocionesModel');

router.get('/', async function (req, res, next) {
  var promociones =await promocionesModel.getPromociones();

  res.render('admin/promociones', {
    layout: 'admin/layout',
     //indicamos una propiedad nueva, de que el js de login va a usar el layout de admin.
    persona:req.session.nombre,
    promociones 

  });
}) //view/admin/login.hbs



module.exports = router;