const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  // status code is optional because 200 is returned by default but adding it here to remember to set it appropriately for all responses.
  res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
