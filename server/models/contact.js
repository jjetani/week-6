let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    PhoneNo: String,
    Email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);