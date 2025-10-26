const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, getMyOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');


router.route('/')
  .get(protect, getMyOrders) // Add GET route to list orders
  .post(protect, createOrder);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);


module.exports = router;