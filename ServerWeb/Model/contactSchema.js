const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  }, 
  phone:{
    type: Number,
    required: true,
  }, 
  email: {
    type: String, 
    required: true,
  },
  message: {
    type: String
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true
  // }
});
module.exports = mongoose.model("Contact", contactSchema);