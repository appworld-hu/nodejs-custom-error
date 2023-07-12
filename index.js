class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyCustomError';
  }
}

// Használat:
function myFunction() {
  throw new MyCustomError('Ez egy egyedi hibaüzenet.');
}

try {
  myFunction();
} catch (error) {
  console.error(error.name);    // 'MyCustomError'
  console.error(error.message); // 'Ez egy egyedi hibaüzenet.'
}