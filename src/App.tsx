import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DashBoard from "./pages/dashboard";
import User from "./pages/user/userList";
import Shop from "./pages/shop/shopList";
import ShopCreate from "./pages/shop/shopCreate"
import Product from "./pages/product/productList";
import ProductEnroll from "./pages/product/productEnroll";
import Influencer from "./pages/influencer";
import Review from "./pages/review";

function App() {

  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/user" element={<User />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/create" element={<ShopCreate/>}/>
            <Route path="/product" element={<Product />} />
            <Route path="/product/enroll" element={<ProductEnroll />} />
            <Route path="/review" element={<Review />} />
            <Route path="/influencer" element={<Influencer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;