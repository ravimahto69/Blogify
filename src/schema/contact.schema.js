import mongoose, { Schema } from "mongoose"

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// prevent model overwrite error
mongoose.models = {}

const ContactSchema = mongoose.model("Contact", contactSchema)
export default ContactSchema
