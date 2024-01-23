const mealType=require('../model/mealtype');

exports.getMealType=(req,res)=>{
    mealType.find().then(result=>{
        res.status(200).json({
            message:"mealtype fetched",
            mealType:result
        });
    }).catch(error=>{
        res.status(500).json({
            message:"Error in Database",
            error:error
        });
    });
}