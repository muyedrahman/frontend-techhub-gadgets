import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import Home from "./pages/Home/Home/Home";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
