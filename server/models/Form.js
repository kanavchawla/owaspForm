import mongoose from 'mongoose'
const schema = mongoose.Schema
const formSchema = new schema(
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
const Form = mongoose.model('Form', formSchema)
export default Form
