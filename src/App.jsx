import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SinglePlayer from "./Components/SinglePlayer";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
