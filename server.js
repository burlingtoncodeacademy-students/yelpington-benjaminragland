const express = require("express");
const app = express();
const path = require("path");
let restaurantPath = __dirname + "/public/restaurants/";
const port = process.env.PORT || 5000;

//shows list of restaurants in json format
app.get("/api", (req, res) => {
  res.sendFile(restaurantPath + "restaurant-id.json");
});

app.get("/api/restaurants", (req, res) => {
  res.sendFile(restaurantPath + "restaurants.json");
});

//shows individual restaurant data that matches id
app.get("/api/:id", (req, res) => {
  res.sendFile(restaurantPath + `${req.params.id}.json`);
});
app.listen(port, () => {
  console.log(`Yelpington listening on port ${port}`);
});
