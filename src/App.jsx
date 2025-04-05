import RootPage from "./components/RootLayout/RootPage.jsx";
import Teams from "./components/Teams/Teams.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
}

export default App;
