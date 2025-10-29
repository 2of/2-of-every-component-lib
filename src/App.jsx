import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PackageProviders } from "./PackProviders";
import routes from "./routes";

function App() {
  return (
    <PackageProviders>
      <Router>
        <Routes>
          {routes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </PackageProviders>
  );
}

export default App;
