const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// how our document look like
const userSchema = mongoose.Schema({
    name: String,
    userName: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// // we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

module.exports = postUser;