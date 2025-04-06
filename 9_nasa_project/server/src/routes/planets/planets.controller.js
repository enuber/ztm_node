const { planets } = require('../../models/planets.model');

function getAllPlanets(req, res) {
  // status code is optional because 200 is returned by default but adding it here to remember to set it appropriately for all responses.
  res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
