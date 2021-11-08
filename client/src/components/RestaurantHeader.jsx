import "../App.css";
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
