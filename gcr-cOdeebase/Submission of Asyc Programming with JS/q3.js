// Q3 – Bug Tracker: Callback to Promise Migration

// Promise-based replacement for the original callback function.
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.5; // Boolean simulation of API failure.

      if (apiFailed) {
        reject(new Error("Bug API request failed."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs.map((description, index) => ({ id: index + 1, description })));
  })
  .catch(error => {
    console.error("Unable to fetch bugs:", error.message);
  });
