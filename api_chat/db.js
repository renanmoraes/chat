var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_chat');

var customerSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'customers' });

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }