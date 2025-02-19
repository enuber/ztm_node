// const mission = 'learn';

// if (mission === 'learn') {
//   console.log('time to write some node code');
// } else {
//   console.log(`Is ${mission} really more fun`);
// }

//  here we will rely on how the code is called in the command line and pass what we want mission to be
// ex. - node hello.js gaming - will get is gaming really more fun.
const mission = process.argv[2];

if (mission === 'learn') {
  console.log('time to write some node code');
} else {
  console.log(`Is ${mission} really more fun`);
}
