const express = require('express');
const router = express.Router();

const saleCtrl = require('../controllers/sale.controller');

router.get('/:userId/:firstDate/:secondDate', saleCtrl.getSales);
router.post('/', saleCtrl.createSale);

module.exports = router;
