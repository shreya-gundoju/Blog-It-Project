const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blog_it:meanblogit@atlascluster.nnk9nea.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});
var userSchema =new mongoose.Schema({
 
  name: {type:String, 
    required: true 
       },
  email:  {
    type:String, 
    required: true,
    index: {
        unique: true, 
    },
    match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
 
  },
  password:  {
    type:String, 
    required: true
},
date:{
  type: Date, 
  default: Date.now }
});
 
var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;