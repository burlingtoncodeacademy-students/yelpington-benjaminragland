import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <>
      <div id="sidebar-container">
        <h1 className="sidebar-header">Burlington Restaurants</h1>
        <Link to="/restaurant">Restaurant</Link>
      </div>
    </>
  );
}
export default Sidebar;
