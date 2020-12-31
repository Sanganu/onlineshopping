const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referencevideosSchema = new Schema({
    youtubeId:{
        type: String,
        required: true
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    url:{
        type:String
    },
    likes :{
        type: Number
    },
    dislikes:{
        type: Number
    },
   createdDate: {
       type: Date,
       default: Date.now
   }
});

const referencevideo = mongoose.model("referencevideo",referencevideosSchema)
module.exports = referencevideo;
