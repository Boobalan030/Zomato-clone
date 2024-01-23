const User = require('../model/userschema');

exports.signUp = async(req,res) => {
    
    const user_data = new User({
        fullname : req.body.fullname,
        email : req.body.email,
        password : req.body.password
    });

    const verify = await User.find({email : req.body.email});
    let result = true;
   
    if(verify.length > 0){
        result = false;
    }    
     
    else{
        const user = await user_data.save();
        result = true;
    }
      
    try{
        res.status(200).json(result);
    }catch(err){
        res.send(err);
    }
}

exports.logIn = async(req,res) => {
    
    const payload = {
        email : req.body.email,
        password : req.body.password
    }
    
    
    const verify = await User.find(payload);
    console.log(verify);
   
    if(verify.length > 0){
        result = true;
    }
   
    else{
        result = false;
    }
    try{
        res.status(200).json(verify);
    }catch(err){
        res.send(err);
    }
    
}