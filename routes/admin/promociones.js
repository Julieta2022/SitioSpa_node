var express = require('express');
var router = express.Router();
var promocionesModel = require('../../models/promocionesModel');

router.get('/', async function (req, res, next) {
  var promociones = await promocionesModel.getPromociones();

  res.render('admin/promociones', {
    layout: 'admin/layout',
    //indicamos una propiedad nueva, de que el js de login va a usar el layout de admin.
    persona: req.session.nombre,
    promociones

  });
}) //view/admin/login.hbs

//para funcionamiento del botón "nuevo"
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  // console.log(req.body)
  try {
    if (req.body.combo != "" && req.body.servicios != "" && req.body.precio != "") {
      await promocionesModel.insertPromociones(req.body)
      res.redirect('/admin/promociones')
    } else {
      res.render('admin/agregar',{
        layout:'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }

  } catch (error) {
    console.log(error)
    res.render('admin/agregar',{
      layout:'admin/layout',
      error: true,
      message:'No se cargó el combo de promoción'
    })
  }
})

router.get('/eliminar/:id', async (req,res,next) =>{
  // console.log(req.params.id);
  var id = req.params.id;
  await promocionesModel.deletePromocionByID(id);
  res.redirect('/admin/promociones')

})

module.exports = router;