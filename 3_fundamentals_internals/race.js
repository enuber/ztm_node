// sync code, goes in order ctrl + cmd + space emojis
console.log('🐇 finished');
console.log('🐢 finished');

// async, will be turtle finishing first and then rabit.
// still runs line by line but it doesn't wait around for the setTimeout to finish
// the function inside set time out is a callback function that will run after something happens. in this case simply waiting for a speicfic amount of time.
setTimeout(() => {
  console.log('🐇 finishes');
}, 1000);

console.log('🐢 finishes');
