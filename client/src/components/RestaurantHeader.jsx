// Stylesheet imports
import "../App.css";

// Component function for displaying individual restaurant name on dedicated restaurant page
function RestaurantHeader(props) {
  return (
    <>
      <div id="header-container">
        <h1>{props.restName}</h1>
      </div>
    </>
  );
}
export default RestaurantHeader;
