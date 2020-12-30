

export default = {
    getReferenceVideo: function(searchKey){
       fetch(`/api/visitors/${searchKey}`)
       .then((results) => {
           return results.json()
       })
    }
}