import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Process from "@/components/process";
import About from "@/components/about";
import Quote from "@/components/quote";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
// import LoadingScreen from "@/components/loading-screen";
import AIChat from "@/components/AIChat";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Process />
        <About />
        <Quote />
        <FAQ />
      </main>
      
      <AIChat />

      <Footer />
    </>
  );
}