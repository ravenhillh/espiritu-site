import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
// import Menus from "./components/Menus";
import Reservations from "./components/Reservations";
import Parties from "./components/Parties";
import Drinks from "./components/Drinks";
import BeerMenu from "./components/BeerMenu";
import SpiritsMenu from "./components/SpiritsMenu";
import CocktailMenu from "./components/CocktailMenu";
import DrinksHome from "./components/DrinksHome";
import WineMenu from "./components/WineMenu";
import SoftDrinksMenu from "./components/SoftDrinksMenu";
import HappyHourMenu from "./components/HappyHourMenu";
import CoffeeAndTeaMenu from "./components/CoffeeAndTeaMenu";
import MenuPage from "./components/MenuPage";
import Contact from "./components/Contact";
import MidCity from "./components/MidCity";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="parties" element={<Parties />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="drinks" element={<Drinks />}>
            <Route index element={<DrinksHome />} />
            <Route path="beer" element={<BeerMenu />} />
            <Route path="spirits" element={<SpiritsMenu />} />
            <Route path="cocktails" element={<CocktailMenu />} />
            <Route path="wine" element={<WineMenu />} />
            <Route path="soft drinks" element={<SoftDrinksMenu />} />
            <Route path="happy hour" element={<HappyHourMenu />} />
            <Route path="coffee and tea" element={<CoffeeAndTeaMenu />} />{" "}
          </Route>
        </Route>
        <Route path="midcity" element={<MidCity />} />
      </Routes>
    </Router>
  );
};

export default App;
