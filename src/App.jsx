import "./App.css";
import Project from "./componentes/Project";
import Technology from "./componentes/Technology";

import Slider from "react-slick";
import About from "./layout/About";

import logo from "./images/logo.png";
import Header from "./layout/Header";
import Home from "./layout/Home";
import SelectedProjects from "./layout/SelectedProjects";
import Footer from "./layout/Footer";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="App font-WorkSans text-secondColor">
      <div className="h-screen py-6 px-10 md:px-28">
        <Header />
        <Home />
        <Technology />
        <SelectedProjects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
