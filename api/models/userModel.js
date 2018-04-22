var moongose= require('mongoose');

var Schema = moongose.Schema;

var userSchema = new Schema({
    name:String,
    password:String
});

var Users = moongose.model("Users", userSchema);

module.exports = Users;
