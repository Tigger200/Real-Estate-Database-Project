var express = require('express');
var router = express.Router();
const { Sequelize } = require("sequelize");
const Clients = require('../models').Clients;

router.get('/', async function(req, res, next) {
    const clients = await Clients.findAll();
    res.json(clients);
})

<<<<<<< HEAD
    
=======
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
>>>>>>> 44b48fad51a7c98b1ecbd86037667c8f2465fb13

module.exports = router;

