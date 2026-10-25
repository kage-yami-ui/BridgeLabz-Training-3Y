// Q7 – The Lazy Loader: Promise Combinator Practice

function loadProfile() {
  return new Promise(resolve => setTimeout(() => resolve("Profile Loaded"), 2000));
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) reject(new Error("Posts failed to load"));
      else resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise(resolve => setTimeout(() => resolve("Messages Loaded"), 1000));
}

async function loadDashboardModules() {
  const startTime = Date.now();

  // allSettled waits for every Promise, even if one rejects.
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`${moduleName}: SUCCESS — ${result.value}`);
    } else {
      console.log(`${moduleName}: FAILED — ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${Date.now() - startTime} ms`);
}

loadDashboardModules().catch(error => {
  // Defensive catch for unexpected errors outside the individual Promises.
  console.error("Dashboard loading error:", error.message);
});
