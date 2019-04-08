const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const listSchema = new Schema ({
  title: {
    type: String,
    default: 'Title',
  },
  description: {
    type: String,
    default: "description",
  },
  price: {
    type: String, 
    required: true, 
  },
  picture: {
    type: String, 
    required: true,
    url: ""
  },
  // picture2: {
  //   type: String, 
  //   required: true,
  //   url: ""
  // },
  // picture3: {
  //   type: String, 
  //   required: true,
  //   url: ""
  // },
   user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})
module.exports = mongoose.model('List', listSchema)