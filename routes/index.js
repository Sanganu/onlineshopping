 //Reference Videos Login - API to get Channel Videos and serve front end????????
 router.get("/api/visitors/:str", (req, res) => {
    //console.log("Youtubheroku e API - Search");
    let videos = [];
    youTube.setKey(process.env.API_YOUTUBE);
    youTube.addParam('safeSearch', 'strict');
    youTube.search(req.params.str, 10, function (error, result) {
      if (error) {
        console.log("error in fetching youtube search data", error);
        res.json(error);
      }

      var channellist = result;
      for (let i = 0; i < channellist.items.length; i++) {
        if (channellist.items[i] && channellist.items[i].id.videoId !== undefined) {
          videos.push({
            id: channellist.items[i].id.videoId,
            title: channellist.items[i].snippet.title,
            description: channellist.items[i].snippet.description,
            url: "https://youtu.be/" + channellist.items[i].id.videoId
            // thumbnail:channellist[i].snippet.thumbnails.default
          });
        } // end if
      } // end for

      console.log("===================LIST =======================");
      console.log("Videos :-->", videos);
      console.log("===================END=========================")
      //res.json({"msg":"What is happening"});
      res.json({ "videos": videos });
    }); // End of youtube api

  }); // end of visitors

