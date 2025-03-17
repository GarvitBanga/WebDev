const mongoose=require('mongoose'); 


const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;

const User=new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,

});


const Todos=new Schema({
    description:String,
    done:Boolean,
    userId:ObjectId
});

const UserModel=mongoose.model('users',User);
const TodosModel=mongoose.model('todos',Todos);


module.exports={
    UserModel,
    TodosModel
}
