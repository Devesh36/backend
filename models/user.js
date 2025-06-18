const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
   
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;
// This code defines a Mongoose schema and model for a user in a MongoDB database.
// The schema includes fields for username, email, password, and age.
// The model is then exported for use in other parts of the application.
// The userSchema defines the structure of the user documents in the database.
// The userModel is created from the schema and is used to interact with the 'user' collection in MongoDB.



