// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error("Temporary order API failure"));
      } else {
        resolve("Order submitted successfully");
      }
    }, 300);
  });
}

async function processOrder() {
  // Three total attempts, including the first attempt.
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success — ${result}`);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed — ${error.message}`);
      if (attempt === 3) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

processOrder()
  .then(result => console.log(result))
  .catch(error => console.error("Final failure:", error.message));
