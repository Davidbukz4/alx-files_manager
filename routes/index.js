import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const express = require('express');

const router = express.Router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

router.route('/users').post(UsersController.postNew);

module.exports = router;
