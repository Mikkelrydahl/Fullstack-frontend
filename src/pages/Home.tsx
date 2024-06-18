import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import FilmGrid from "../components/FilmGrid";
import ListGroup from "../components/ListGroup";

function App() {
  return (
    <div>
      <FilmGrid></FilmGrid>
    </div>
  );
}

export default App;
