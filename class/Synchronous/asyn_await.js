// * async and await are built on the top of Promises.
//? they make asynchronous code  look like synchronous
//!( but still non-blocking)

// ? async Keyword

async function greets(name) {
  return `Hello ${name}`
}

console.log(greets("Saurav"));


// ? await Keyword

// await can only be used in a async function 