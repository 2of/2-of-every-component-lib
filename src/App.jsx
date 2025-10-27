import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SamplePage } from "./SamplePage";
import { PackageProviders } from "./PackProviders";
import { ComponentWikiRenderer } from "./WikiPage";
import usage from "./usage.json"

function App() {

  return (
    <PackageProviders>
      <Router>
        <Routes>
          <Route path="/" element={<ComponentWikiRenderer componentDocs={usage} />} />
        </Routes>
      </Router>
    </PackageProviders>
  );
}

export default App;