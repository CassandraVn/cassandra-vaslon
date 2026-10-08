import "./styles.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
// import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* TODO rajouter mon projet principal */}
        {/* <Projects /> */}
        <Journey />
        <Skills />
        <Education />
        <Contact />
        </main>
      <Footer />
    </>
  );
}
