import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import TopRated from "./Components/TopRated";
import About from "./Components/About";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import store from "./Components/Redux/store";
import {Provider} from 'react-redux';
// import Product from "./Components/Product";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AllProducts />
        <Navbar />
        <Routes>
          <Route path="/all" element={<AllProducts />} />
          {/* <Route path=":ID" element={<Product />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
