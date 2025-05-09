import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { Carousel } from "./components/carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Carousel />
      <Services />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
