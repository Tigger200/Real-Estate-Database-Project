var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Properties = require('../models').Properties;

router.get('/', async function(req, res, next) { 
    const properties = await Properties.findAll();
    res.json(properties);
})

module.exports = router;