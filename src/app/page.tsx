import Blog from "./blog/page";
import Contact from "./contact/page";
import Hero from "@/Components/Hero";
import Deals from "@/Components/Deals";

export default function Home() {
  return (
    <div>
     
      <Hero/>
      <Contact/>
      <Blog/>
      <Deals/>
    </div>
  );
}
