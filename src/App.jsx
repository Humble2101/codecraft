import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Training from "./pages/Training";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import LOgin from "./pages/LOgin";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/training" element={<Training />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
        <Route path="/login" element={<LOgin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
