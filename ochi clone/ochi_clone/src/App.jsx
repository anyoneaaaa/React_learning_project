// import React from 'react';
import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing_page from "./components/Landing_page";
import Marqee from "./components/Marqee";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-800">
      <Navbar />
      <Landing_page />
      <Marqee/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
