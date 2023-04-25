var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Clients = require('../models').Clients;

router.get('/', async function(req, res, next) {
    const clients = await Clients.findAll();
    res.json(clients);
})

    

module.exports = router;

