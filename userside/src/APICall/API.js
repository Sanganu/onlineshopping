
export default{
    getReferenceVideo: function(searchKey){
       fetch(`/api/videos/${searchKey}`)
       .then((results) => {
           console.log(results)
           return results.json()
       })
    }
}



