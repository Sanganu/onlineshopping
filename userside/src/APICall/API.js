
export default{
    getReferenceVideo: async function(searchKey){
     let apiData = await fetch(`/api/videos/${searchKey}`)
     let searchData = await apiData.json() 
      return  await searchData
    //    .then((results) => {
    //        console.log(results)
    //        return results.json()
    //    })
    }
}



