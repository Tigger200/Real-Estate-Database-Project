var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Agents = require('../models').Agents;


router.get('/', async function(req, res, next) {
  const agents = await Agents.findAll();
  res.json(agents);
});

router.put('/clients', async function(req,res){


})

module.exports = router;
