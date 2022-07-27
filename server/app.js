import express from 'express'
import cors from 'cors'

import { connect } from './database/db.js'
import 'dotenv/config'
import { router as member } from './routes/form.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/member', member)
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
