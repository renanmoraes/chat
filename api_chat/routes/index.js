var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET all customers. */
router.get('/mensagens', function(req, res, next) {
    var db = require('../db');
    var menssagens = db.Mongoose.model('menssagens', db.CustomerSchema, 'menssagens');
    menssagens.find({}).lean().exec(function(e, docs) {
        res.json(docs);
        res.end();
    });
});

/* GET ONE customers. */
router.post('/mensagem', function(req, res, next) {
    var db = require('../db');
    var menssagens = db.Mongoose.model('menssagens', db.CustomerSchema, 'menssagens');
    menssagens.find({ _id: req.body.id }).lean().exec(function(e, docs) {
        res.json(docs);
        res.end();
    });
});

/* POST ONE customer. */
router.post('/salvarMensagem', function(req, res, next) {
    var db = require('../db');
    var menssagens = db.Mongoose.model('menssagens', db.CustomerSchema, 'menssagens');
    var newcustomer = new menssagens({ nome: req.body.nome, msg: req.body.msg, hr: req.body.hr });
    newcustomer.save(function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            //return res;
        }
    });
});


/* DELETE ONE customer. */
router.delete('/customers/:id', function(req, res, next) {
    var db = require('../db');
    var Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    Customer.find({ _id: req.params.id }).remove(function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }
        res.json({ success: true });
        res.end();
    });
});
module.exports = router;