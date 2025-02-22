const axios = require('axios');

// each .then() or .catch() returns a promise, so they happen in chained order
axios
  .get('https://www.google.com')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('all done');
  });
