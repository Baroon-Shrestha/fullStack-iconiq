import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Client from "./Pages/Client";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import Pricing from "./Pages/Pricing";
import { Toaster } from "react-hot-toast";
import Chat from "./Components/ChatComponents/Chat";
import ChatPage from "./Pages/ChatPage";

import axios from "axios";
import AdminPanel from "./Components/ChatComponents/AdminPanel";
import LoginDialog from "./Components/ChatComponents/LoginDialog";
import Chat2 from "./Components/ChatComponents/Chat2";
import AdminRoutes from "./Routes/AdminRoutes";

export default function App() {
  const [admin, setAdmin] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/me", { withCredentials: true })
      .then((res) => {
        setAdmin(res.data.username);
      })
      .catch(() => setAdmin(null));
  }, []);

  return (
    <>
      <div className="m-6">
        <Toaster position="top-center" />
        <ScrollToTop />
        <Chat2 />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/client" element={<Client />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/chat"
            element={
              <AdminRoutes>
                <ChatPage />
              </AdminRoutes>
            }
          />

          <Route
            path="/admin"
            element={
              admin ? <AdminPanel /> : <LoginDialog onLogin={setAdmin} />
            }
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
