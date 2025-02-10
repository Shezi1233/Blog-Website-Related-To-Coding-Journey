
import Hero from "./components/hero";
import BlogList from "./components/bloglist";
import TopBlogs from "./components/topblogs";
import Statics from "./components/statics";
import Gallery from "./components/gallery";
import Comments from "./components/comment";
import { Contact } from "lucide-react";
import ContactUs from "./components/contactus";

const userComments = [
  {
    name: 'Stella Bergmann',
    picture: '/users/user1.jpg',
    comment: 'This blog is outstanding! The content is so well-written.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    picture: '/users/user3.png',
    comment: 'Great tips and very insightful. I would highly recommend this blog.',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    picture: '/users/user2.webp',
    comment: 'I enjoyed reading this article. Keep up the great work!',
    rating: 4,
  },
];


export default function Home() {
  return (
   <div>
    <Hero/>
    <BlogList/>
    <TopBlogs/>
    <Gallery/>
    <Statics/>
    <ContactUs/>
    <Comments comments={userComments} /> 
   </div>
  );
}
