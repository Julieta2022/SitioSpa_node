var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout' //indicamos una propiedad nueva, de que el js de login va a usar el layout de admin.

  });
}) //view/admin/login.hbs


module.exports = router;
