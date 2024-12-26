import React, { useContext } from "react";
import Home from "./Pages/Home";
import ByCredit from "./Pages/ByCredit";
import Result from "./Pages/Result";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { AppContext } from "./Context/AppContext";
import { ToastContainer } from 'react-toastify'


const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/bycredit" element={<ByCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
