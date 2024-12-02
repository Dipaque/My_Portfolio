import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Body from "@/components/Home/Body";
import Header from "@/components/Home/Header";
import PageRoutes from "@/components/PageRoutes";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {

  return (
   <div>
    <Body />
    <Project />
    <Experience />
    <Skills />
<Footer />   
    
   </div>
  );
}
