import React, { createContext, useState, useContext } from "react";
import coursesData from "../data/coursesData"; // Adjust path as needed

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesData);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CoursesProvider");
  }
  return context;
};
