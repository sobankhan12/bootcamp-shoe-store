import React from "react";
import Navbar from "./components/Navbar";
import MainSec from "./components/MainSec";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MainSec />}></Route>
          <Route path="products" element={<Products />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route
            path="products/:productID"
            element={<ProductDetails />}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
