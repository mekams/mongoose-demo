import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/user.js";

mongoose.connect("mongodb+srv://root:kamran51@cluster0.j26qx1a.mongodb.net/?retryWrites=true&w=majority");

console.log("Connected with mongoose")

// // Create a new blog post object
// const article = new Blog({
//     title: 'Awesome Post!',
//     slug: 'awesome-post',
//     published: true,
//     content: 'This is the best post ever',
//     tags: ['featured', 'announcement'],
//   });
  
//   // Insert the article in our MongoDB database
//   await article.save();



const user = await User.create({
  name: 'Jesse Hall',
  email: 'jesse@email.com',
});

const article = await Blog.create({
  title: 'Awesome Post!',
  slug: 'Awesome-Post',
  author: user._id,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
  comments:[{user:user._id,content:"kams", votes:30}]
});

console.log(article);
