import ButtonGradient from "./assets/svg/ButtonGradient";
import Demos from "./components/Demos";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Demos />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
