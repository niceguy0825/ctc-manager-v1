import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DashBoard from "./pages/dashboard";
import Reservation from "./pages/Reservation";

function App() {

  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;