require('dotenv').config
const port=process.env.SERVER_PORT||3002
const mongodbURL=process.env.MONGODB_ATLAS_URL||"mongodb://localhost:27017/ecommerceMern"
const defaultImagePath=process.env.DEFAULT_USER_image_PATH||"../public/image/user/IMG-20231114-WA0008-01.jpeg"

module.exports={port,mongodbURL,defaultImagePath}    