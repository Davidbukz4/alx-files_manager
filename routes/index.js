import AppController from '../controllers/AppController';

const express = require('express');

const router = express.router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

module.exports = router;
