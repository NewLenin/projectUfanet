const Router = require('express');
const router = new Router();
const controller = require('./authController.js');

router.post('/reg', controller.reg);
router.post('/login', controller.login);
router.post('/users', controller.getUsers);

module.exports = router;