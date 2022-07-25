const mongoose = require('mongoose');
const schema = mongoose.Schema;
const formSchema =new schema({
name:{
    type: String,
    // required: true,
},
position:{
    type: String,
    // required: true,
},
insta:{
    type: String,
    required: false,
},
linkedin:{
    type: String,
    required: false,
},
github:{
    type: String,
    required: false,
}
},{timestamps: true});
const Form = mongoose.model('Form',formSchema);
module.exports = Form;