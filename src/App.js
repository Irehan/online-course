import React from "react";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CoursesProvider } from "./context/CoursesContext"; // Import CoursesProvider

// Conditionally setting AppRouter based on environment
const AppRouter =
  process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;

function App() {
  return (
    <CoursesProvider>
      <AppRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppRouter>
    </CoursesProvider>
  );
}

export default App;
