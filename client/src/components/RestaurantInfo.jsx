import "../App.css";

function RestInfo(props) {
  return (
    <>
      <h2>{props.restName}</h2>
      <div id="info-container">
        <div id="restaurant-info">
          <p>
            <b>Address:</b> {props.restAddress}
          </p>
          <p>
            <b>Phone:</b> {props.restPhone}
          </p>
          <p>
            <b>Hours:</b> {props.restHours}
          </p>
        </div>
        <div id="comments">
          <p>
            <b>Comments:</b> {props.restNoteOne}
          </p>
          <p>
            <b>Comments:</b> {props.restNoteTwo}
          </p>
        </div>
      </div>
    </>
  );
}

export default RestInfo;
