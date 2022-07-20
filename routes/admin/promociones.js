var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('admin/promociones', {
    layout: 'admin/layout',
     //indicamos una propiedad nueva, de que el js de login va a usar el layout de admin.
    persona:req.session.nombre 

  });
}) //view/admin/login.hbs



module.exports = router;