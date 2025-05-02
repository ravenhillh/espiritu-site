import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Menus from "./components/Menus";
import Reservations from "./components/Reservations";
import Parties from "./components/Parties";
import Drinks from "./components/Drinks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menus />} />
          <Route path="parties" element={<Parties />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="drinks" element={<Drinks />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
