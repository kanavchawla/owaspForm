import express from 'express'
import cors from 'cors'

import { connect } from './database/db.js'
import 'dotenv/config'
//express app
const app = express()
//connect to mongodb
// const dbURI = "mongodb+srv://dbUser:Kanav@form.3ag4o.mongodb.net/form-main?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.post('/post_data',(req,res)=>{
// console.log((req.body));
// const form = new Form((req.body));
// form.save();
// })
let PORT = process.env.PORT || 3000
;(async function () {
  try {
    await connect(process.env.MONGO_URI)
    console.log('DB connected')
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  } catch (err) {
    console.log(err)
  }
})()
