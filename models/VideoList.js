const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoListSchema = new Schema({
    youtubeId:{
        type: String,
        required: true
    },
    videotitle:{
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
    publishedOn:{
        type: Date
    },
    thumbnail:{
        type: String
    },

   createdDate: {
       type: Date,
       default: Date.now
   }
});

const VideoList = mongoose.model("VideoList",VideoListSchema)
module.exports = VideoList;
