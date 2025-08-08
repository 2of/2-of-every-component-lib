import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SamplePage } from "./SamplePage";
import { PackageProviders } from "./PackProviders";


function App() {

  return (
    <PackageProviders>
      <Router>
        <Routes>
          <Route path="/" element={<SamplePage />} />
        </Routes>
      </Router>
    </PackageProviders>
  );
}

export default App;