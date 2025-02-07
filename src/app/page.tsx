import Image from "next/image";
import { Header } from "./components/header";
import Hero from "./components/hero";
import BlogList from "./components/bloglist";



export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <BlogList/>
 
   </div>
  );
}
