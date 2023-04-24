var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Agents = require('../models').Agents;


/* GET agents listing. */
router.get('/', async function(req, res, next) {
  const agents = await Agents.findAll();
  res.json(agents);
});

module.exports = router;
