/** Alejandra Avilés - 24722
 *  Conexión de las URLs con las funciones del controlador.
 */

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAll);
router.post('/', productController.create);
router.put('/:id', productController.updatePut);
router.patch('/:id', productController.updatePatch);
router.delete('/:id', productController.delete);

module.exports = router;