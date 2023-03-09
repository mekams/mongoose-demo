import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const blogSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: {
    type: SchemaTypes.ObjectId,
    ref:'User',
    required:true,
  },
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [
    {
      user: {
        type: SchemaTypes.ObjectId,
        ref:'User',
        required:true,
      },
      content: String,
      votes: Number,
    },
  ],
});

const Blog = model("Blog", blogSchema);
export default Blog;
