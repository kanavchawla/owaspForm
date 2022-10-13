import mongoose from 'mongoose'
const schema = mongoose.Schema
const formSchemaa = new schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    insta: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  { timestamps: true },
)
const Form = mongoose.model('Form', formSchemaa)
export default Form
