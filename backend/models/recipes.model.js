const mongoose= require ('mongoose');

const Schema=mongoose.Schema;

const recipesSchema=new Schema({
    username:{type:String, required:true},
    description:{type:String, required:true},
    duration:{type:Number,required:true},
    date:{type:Date, required:true},
},{
    timestamps:true,
});

const Recipes=mongoose.model('recipes', recipesSchema);

module.exports=Recipes;