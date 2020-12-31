const YouTube = require('youtube-node');
const youTube = new YouTube();
const router = require("express").Router();
const db = require("../models/ReferenceVideos")
const youTubeSearch = require("youtube-search");

//Reference Videos Login - API to get Channel Videos and serve front end????????
router.get("/old/videos/:str", (req, res) => {
  console.log("Youtubeheroku  API - Search", req.params.str);
  let videos = [];
  youTube.setKey(process.env.API_YOUTUBE);
  youTube.addParam('safeSearch', 'strict');
  youTube.search('Shape of You', 1, function (error, result) {
    if (error) {
      console.log("error in fetching youtube search data", error);
      res.json(error);
    }
    else {
      console.log(JSON.stringify(result, null, 2));

      console.log(result, process.env.API_YOUTUBE)
      var channellist = result;
      // for (let i = 0; i < channellist.items.length; i++) {
      //   if (channellist.items[i] && channellist.items[i].id.videoId !== undefined) {
      //     db.find({youtubeId : channellist.items[i].is.videoId})
      //     .then( video => {
      //       console.log("Video",video)
      //     })
      //     videos.push({
      //       id: channellist.items[i].id.videoId,
      //       title: channellist.items[i].snippet.title,
      //       description: channellist.items[i].snippet.description,
      //       url: "https://youtu.be/" + channellist.items[i].id.videoId
      //       // thumbnail:channellist[i].snippet.thumbnails.default
      //     });
      //   } // end if
      // } // end for

      console.log("===================LIST =======================");
      console.log("Videos :-->", videos);
      console.log("===================END=========================")
      //res.json({"msg":"What is happening"});
      res.json({ "videos": videos });
    }
  }); // End of youtube api

}); // end of visitors


//Reference Videos Login - API to get Channel Videos and serve front end????????
router.get("/videos/:str", (req, res) => {
  console.log("Youtubeheroku  API - Search", req.params.str);
  let videos = [];
  let options = {
    maxResults: 9,
    key: process.env.API_YOUTUBE
  }
  youTubeSearch('JavaScript',options,function(err,results){
    if (err){
      console.log("Err in fetching Youtube data",err)
      res.json(err)
    }
    else{
      console.log("Youtube results",results)
      res.json(results)
    }
  })

});

module.exports = router;