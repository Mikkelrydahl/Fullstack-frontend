import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import FilmGrid from "./components/FilmGrid";
import ListGroup from "./components/ListGroup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
