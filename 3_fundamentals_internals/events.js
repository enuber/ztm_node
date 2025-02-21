const EventEmitter = require('events'); // Import EventEmitter module

const myEmitter = new EventEmitter(); // Create an EventEmitter instance

// Register an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// ----------------------------------------
// different example.

myEmitter.once('login', (user) => {
  console.log(`${user} has logged in.`);
});

myEmitter.emit('login', 'Alice'); // Output: Alice has logged in.
myEmitter.emit('login', 'Bob'); // No output, listener is removed.

// ----------------------------------------
// different example.

const sayHello = (name) => console.log(`Hello, ${name}!`);
myEmitter.on('greet', sayHello);

myEmitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// Remove the listener
myEmitter.off('greet', sayHello);

myEmitter.emit('greet', 'Bob'); // No output, as listener is removed.

// ----------------------------------------
// different example.
myEmitter.on('error', (err) => {
  console.error('Error occurred:', err.message);
});

myEmitter.emit('error', new Error('Something went wrong!'));
