import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>about</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
