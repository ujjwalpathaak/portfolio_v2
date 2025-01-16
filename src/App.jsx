import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Table from "./pages/Table";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all/projects" element={<Table />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
