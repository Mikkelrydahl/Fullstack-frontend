import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "blue.200",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
