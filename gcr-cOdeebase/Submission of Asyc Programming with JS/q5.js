// Q5 – Frontend Rush: Avoiding Callback Hell

function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(`${stageName} completed`);
    callback();
  }, 1000);
}

// Part A: nested callbacks (callback hell demonstration).
function runWithNestedCallbacks() {
  console.log("Starting callback pipeline...");
  runStage("Design", () => {
    runStage("Build", () => {
      runStage("Test", () => {
        runStage("Deploy", () => {
          runStage("Celebrate", () => {
            console.log("Callback pipeline completed.");
            runWithAsyncAwait();
          });
        });
      });
    });
  });
}

// Promise-based stage used by async/await.
function stagePromise(stageName) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${stageName} completed`);
      resolve();
    }, 1000);
  });
}

// Part B: sequential async/await version.
async function runWithAsyncAwait() {
  console.log("\\nStarting async/await pipeline...");
  for (const stage of ["Design", "Build", "Test", "Deploy", "Celebrate"]) {
    await stagePromise(stage);
  }
  console.log("Async/await pipeline completed.");
}

/*
async/await improves readability because sequential steps are written in
a clear, top-to-bottom style instead of deeply nested callbacks. Each await
waits for the current stage before starting the next one.
*/
runWithNestedCallbacks();
