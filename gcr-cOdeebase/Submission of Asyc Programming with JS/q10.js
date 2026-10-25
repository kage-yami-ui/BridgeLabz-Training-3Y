// Q10 – The Final Delivery: Async Pipeline Debugger

function deliveryStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1001);

    setTimeout(() => {
      // Each step has a simulated 15% chance of failure.
      if (Math.random() < 0.15) {
        reject(new Error(`${stepName} failed`));
      } else {
        resolve(stepName);
      }
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  const steps = [
    "Step 1: Order taken",
    "Step 2: Food prepared",
    "Step 3: Package ready",
    "Step 4: Out for delivery",
    "Step 5: Delivered"
  ];

  try {
    for (const step of steps) {
      const completedStep = await deliveryStep(step);
      console.log(completedStep);
    }
    console.log("Delivery completed!");
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}

// Sequential await preserves delivery order: each step starts only after
// the previous step succeeds. A rejection transfers control to catch.
runPipeline();
