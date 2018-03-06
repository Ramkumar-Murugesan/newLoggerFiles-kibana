var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Users_schema = new mongoose.Schema({
   id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    firstname : {type: String },
    lastname : {type:String},
    username : {type: String },
    password: {type:String},
    email:{type:String},
    role:{type:String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});

// module.exports = mongoose.model('user', Users_schema);


autoIncrement.initialize(mongoose);
Users_schema.plugin(autoIncrement.plugin ,{model : 'User' , startAt:1} );
module.exports = mongoose.model('User',Users_schema);
