// Q1 – The Startup Morning: Async Coffee Maker
// Each step takes a random 1–2 seconds and can fail occasionally.

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function coffeeStep(stepName) {
  return new Promise(async (resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);
    await wait(delay);

    // Simulate a 20% chance of failure for this step.
    if (Math.random() < 0.2) {
      reject(new Error(`${stepName} failed. Please try again.`));
      return;
    }

    console.log(`${stepName} completed.`);
    resolve();
  });
}

coffeeStep("Boiling water")
  .then(() => coffeeStep("Brewing coffee"))
  .then(() => coffeeStep("Pouring coffee into a cup"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch(error => console.error("Coffee process error:", error.message));
