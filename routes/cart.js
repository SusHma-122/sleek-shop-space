const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');

router.post('/', auth, cartController.addToCart);
router.get('/:userId', cartController.getCart);
router.delete('/:userId/:productId', cartController.removeFromCart);

module.exports = router; 