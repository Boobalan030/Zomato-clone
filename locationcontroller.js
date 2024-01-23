const Location=require('../model/location');

exports.getlocation=(req,res)=>{
    Location.find().then(result=>{
        res.status(200).json({
            message:"locations fetched",
            locations:result
        });
    }).catch(error=>{
        res.status(500).json({
            message:"Error in Database",
            error:error
        });
    });
}