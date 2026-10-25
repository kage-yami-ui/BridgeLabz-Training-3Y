// Q4 – DevOps Delay: Async Timeout Race

function serverResponse(serverName, delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 15% chance that a server request fails.
      if (Math.random() < 0.15) {
        reject(new Error(`${serverName} failed to respond.`));
      } else {
        resolve(`${serverName} responded in ${delayMs / 1000} seconds`);
      }
    }, delayMs);
  });
}

const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

// Promise.all waits until both succeed; it rejects if either one rejects.
Promise.all([serverA, serverB])
  .then(responses => {
    console.log(responses);
    console.log("Deployment completed for all servers");
  })
  .catch(error => {
    console.error("Deployment error:", error.message);
  });

// Promise.race settles with the first promise to settle (success or failure).
Promise.race([serverResponse("Server A", 2000), serverResponse("Server B", 3000)])
  .then(response => console.log("Fastest response:", response))
  .catch(error => console.error("Fastest response request failed:", error.message));
