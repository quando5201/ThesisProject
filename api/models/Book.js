import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  year: { 
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  slots: {
    type: [String],
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Book", BookSchema)