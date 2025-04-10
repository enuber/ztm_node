const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442-b',
  customers: ['NASA', 'NOAA'],
  upcoming: true, // becomes false when it is historical
  success: true, // to track whether a mission happpened or not future-proofing to track if it happened or not
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  // we want to increase the flight number each time so that we have unique identifiers. This also means making it friendly to someone using the program where they don't have to keep track of this info. The last flight number already exists in the server, so the client shouldn't need to send us this information.
  latestFlightNumber++;
  // because we are adding in the flight number here, it means "launch" doesn't include this information so we need to add it in. Object.assign() allows us to add in addtional data and, if it already exists, it will just override what is there. We are setting addtional fields that the client doesn't need to worry about as well. Upcoming/Success are set to true as if something goes wrong we can change to false.
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customers: ['NASA', 'NOAA'],
      upcoming: true,
      success: true,
    })
  );
}

function abortLaunchById(launchId) {
  // delete the launch
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
};
