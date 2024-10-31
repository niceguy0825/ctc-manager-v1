import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DashBoard from "./pages/dashboard";
import User from "./pages/user/userList";
import Reservation from "./pages/Reservation/ReservationList";

function App() {

  const token = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/user" element={<User />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;