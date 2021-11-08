import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <>
      <div id="sidebar-container">
        <h1 className="sidebar-header">Burlington Restaurants</h1>

        <Link className="link" to="/restaurant/bliss-bee">
          Bliss Bee
        </Link>
        <Link className="link" to="/restaurant/burlington-bagel-bakery">
          Burlington Bagel Bakery
        </Link>
        <Link className="link" to="/restaurant/panera-bread">
          Panera Bread
        </Link>
        <Link className="link" to="/restaurant/tastee-grill">
          TASTee Grill
        </Link>
        <Link className="link" to="/restaurant/great-harvest">
          Great Harvest
        </Link>
        <Link className="link" to="/restaurant/eco-bean">
          Eco Bean
        </Link>
        <Link className="link" to="/restaurant/great-northern">
          Great Northern
        </Link>
        <Link className="link" to="/restaurant/leonardos">
          Leonardo's
        </Link>
      </div>
    </>
  );
}
export default Sidebar;
