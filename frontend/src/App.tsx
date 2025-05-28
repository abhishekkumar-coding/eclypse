
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ProductShowcase from "./components/ProductShowcase";
import Testimonials from "./components/Testimonials";
import Accordian from "./components/Accordion";
import CheckOutForm from "./components/CheckOutForm";
import { Route, Router, Routes } from "react-router-dom";


const App: React.FC = () => {
  const Home: React.FC = () => {
    return (<>
      <Hero />
      <Gallery />
      <ProductShowcase />
      <Accordian />
      <Testimonials />
    </>
    )
  }
  return (
    <div className="relative w-full bg-black text-white">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<CheckOutForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;