import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
