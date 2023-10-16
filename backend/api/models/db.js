const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://BlogIt:meanblogit@cluster0.zkuudre.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,
 
});
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;