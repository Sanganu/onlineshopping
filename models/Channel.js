const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
   channelId:{
        type: String,
        required: true,
        primaryKey: true
    },
    channelTitle:{
        type:String,
        required: true
    }
});

const ChannelList = mongoose.model("ChannelList",ChannelSchema)
module.exports = ChannelList;
