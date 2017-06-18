var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_chat');

var customerSchema = new mongoose.Schema({
    nome: String,
    msg: String,
    hr: String
}, { collection: 'menssagens' });

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }