// const http = require('https');

// the response passed into the callback is the result of making the request that we specified as first argument.
// we need to be able to do something with the response result of the function call so need to asign it to a variable.
// if we want to call the https:// we need to require the https above.
// const req = http.request('https://www.google.com', (res) => {
// this is how we deal with the response where we do something (emitter)
// we could receive more than one of the data events if the size of the response from the server is very large.
// res.on('data', (chunk) => {
//   console.log(`Data chunk: ${chunk}`);
// });
// when no more data is coming in, we get the end event.
//   res.on('end', () => {
//     console.log('No more data');
//   });
// });

// we need to do this, as it is what causes the req to be sent.
// req.end();

// more modern to destructure off what we actually want to use which in this case is just request.
// get - when we are only getting data from the server and no sending any data in its direction, it also means we no longer need to use req.end() in order to make the request.
// const { request } = require('https');
// const req = request('https://www.google.com', (res) => {

// const { get } = require('https');
// get('https://www.google.com', (res) => {
//   res.on('data', (chunk) => {
//     console.log(`Data chunk: ${chunk}`);
//   });
//   res.on('end', () => {
//     console.log('No more data');
//   });
// });

// req.end();

// improved code.
const { get } = require('https');

get('https://www.google.com', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk; // Append chunks to `data`
  });

  res.on('end', () => {
    console.log('Full Response:', data); // Print full HTML response
  });
});
