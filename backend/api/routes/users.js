var express = require('express');
var userModel = require('../models/db');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function(req, res, next) {
 
  var userDetails = new userModel({
    name: 'Vikas',
    email: 'vikas@gmail.com',
    password: 'vikas@123',
    
  });
 
  userDetails.save(function(err,req1){
    if(err) throw err;
   
    res.render('index', { title: 'User Data Inserted' });
       
  })
 
  
});

module.exports = router;