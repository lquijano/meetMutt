// LOAD DATA
// we are linking our routes to a series of data sources
var animals = require("../data/animals.js");

//ROUTING
module.exports = function(app) {
  app.get("/api/animals", function(req, res){
    res.json(animals);
  });
};


// animation
  // flipper + sounds
  //  you got mail for the dog reveal



  // petFinder API
  // sounds?