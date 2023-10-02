var express = require('express');
var userModel = require('../models/user');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails = new userModel({
    name: 'Vikas',
    email: 'vikas@gmail.com',
    password: 'vikas@123',
    
  });
  try{
  userDetails.save().then(function(req){
    res.render('index', { title: 'User Data Inserted' });
       
  });
}
catch(err){
  throw error;
}  
});
 
module.exports = router;
