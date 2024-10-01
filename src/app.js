import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'



const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true

}
))
//data kaun sa formate me lena h aur kitna lena h o jaruri h defined karna
app.use(express.json({limit: "16kb"}))

//jab url se data aai to encoded form me hota h aur yaha pe bhi limit lga sakte h

app.use(express.urlencoded({extended: true, limit:"16kb"}))

//static kai baar file and folder server me rakhana chate h ki koi bhi aai to access to acess kr le public ko public me image /video kuch bhi ho sakta h aur koi bhi access kar sakta h
app.use(express.static("public"))

app.use(cookieParser())



//routes import

import userRouter from './routes/user.routes.js'


 //routes decleration

 app.use("/api/v1/users",userRouter)

 //http://localhost:8000/api/v1/users/register

export { app }