const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referencevideosSchema = new Schema({
    youtubeId:{
        type: String,
        required: true
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
