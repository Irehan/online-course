import React from "react";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Courses } from "./components/Courses";
import { Home } from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CoursesProvider } from "./context/CoursesContext";
import { ComingSoon } from "./pages/ComingSoon";

function App() {
  return (
    <CoursesProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </HashRouter>
    </CoursesProvider>
  );
}

export default App;
