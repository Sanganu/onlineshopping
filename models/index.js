/* Mongo Database */
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = `mongodb://localhost/MERNYoutubeAPI`

if (process.env.MONGODB_URI) {
	MONGO_URL = process.env.MONGODB_URI
} else {
	MONGO_URL = MONGO_LOCAL_URL
}

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, (err) => {
	if (err) console.log("MongoDB Connection Error : ", err)
	console.log("MongoDB connection established", MONGO_URL)
})
