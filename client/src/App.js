//React imports
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styling and restaurant page imports
import "./App.css";
import GreatHarvest from "./components/restaurants/GreatHarvest";
import BlissBee from "./components/restaurants/BlissBee";
import BurlingtonBagel from "./components/restaurants/BurlingtonBagel";
import EcoBean from "./components/restaurants/EcoBean";
import GreatNorthern from "./components/restaurants/GreatNorthern";
import Leonardos from "./components/restaurants/Leonardos";
import PaneraBread from "./components/restaurants/PaneraBread";
import TasteeGrill from "./components/restaurants/TasteeGrill";
import Index from "./components/Index";

function App(props) {
  return (
    <>
      {/* Browser routes for individual restaurants */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant/great-harvest" element={<GreatHarvest />} />
          <Route path="/restaurant/bliss-bee" element={<BlissBee />} />
          <Route
            path="/restaurant/burlington-bagel-bakery"
            element={<BurlingtonBagel />}
          />
          <Route path="/restaurant/panera-bread" element={<PaneraBread />} />
          <Route path="/restaurant/tastee-grill" element={<TasteeGrill />} />
          <Route path="/restaurant/eco-bean" element={<EcoBean />} />
          <Route
            path="/restaurant/great-northern"
            element={<GreatNorthern />}
          />
          <Route path="/restaurant/leonardos" element={<Leonardos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
