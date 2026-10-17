let temperature = 12;
let isRaining = false;
let windSpeed = 25;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

if ((temperature < 15 && windSpeed > 20) || isRaining) {
    console.log("Outdoor activities are not recommended.");
}