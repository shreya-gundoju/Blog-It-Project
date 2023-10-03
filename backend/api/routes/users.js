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
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: hash,
    role:'Author'
    
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


 
router.post('/register',checkEmail, function(req, res, next) {
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
    
  });
 
  userDetails.save().then(doc=>{
    res.status(201).json({
        message:"Inserted Successfully",
        results:doc
    });
})
.catch(err=>{
    res.json(err);
});
 
  
});

router.post("/login",function(req,res,next){
 
  var email=req.body.Email;
  userModel.find({email:email})
  .exec()
  .then(user=>{
      if(user.length<1){
          res.status(200).json({
            msg:"Auth Failed",
            UserData:'',
            status:'error'
          });
      }else{
          bcrypt.compare(req.body.Password, user[0].password, function(err, result) {
             if(err){
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
             if(result){
              res.status(200).json({
                msg:"User Login Successfully",
                  UserData:user,
                  status:'success'
              });
             }else{
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
          });
      
  }
  })
  .catch(err=>{
      res.json({
          error:err
      });
  })
 
 
  });

  function checkEmail(req,res,next){
    var email=req.body.Email;
    var checkexitemail=userModel.findOne({email:email});
    checkexitemail.exec((err,data)=>{
   if(err) throw err;
   if(data){
    return res.status(200).json({
      msg:"Email Already Exits",
      results:data
  });
   }
   next();
    });
  }
   

module.exports = router;
