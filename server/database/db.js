import mongoose from 'mongoose'

async function connect(url) {
  try {
    return mongoose.connect(url)
  } catch (err) {
    console.log('error in connecting to db')
  }
}

export { connect }
