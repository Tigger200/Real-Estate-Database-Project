var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Clients = require('../models').Clients;

router.get('/', async function(req, res, next) {
    const clients = await Clients.findAll();
    res.json(clients);
})

router.post('/', async (req,res) => {
    const {name, agent, property} = req.body;
    const newClient = await Clients.create({
        name,
        agent,
        property
    });
    res.json({
        id: newClient.id
    })
})

module.exports = router;

