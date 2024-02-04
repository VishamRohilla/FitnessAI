const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema =new Schema({
   height:{type:String,required:true },
    weight:{type:String,required:true },
    gender:{type:String,required:true },
    primarygoal:{type:String,required:true },
    secondarygoal:{type:String},
    fit_level:{type:String},
    timing:{type:String},
    equip_available:{type:String},
    diet_pf:{type:String},
    diet_rst:{type:String},
    Health_Conditions:{type:String},
    pfd_ex:{type:String},
    day_pw:{type:String},
    like_dl:{type:String},
    date:{type:Date,default:Date.now}


});
module.exports = mongoose.model('Ser_Info' , UserSchema);