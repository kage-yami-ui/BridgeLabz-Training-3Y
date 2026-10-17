// Q2: String Manipulation Report

let productName = " wireless headphones PRO ";

let cleanedName = productName.trim();

let words = cleanedName.toLowerCase().split(" ");

let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

let formattedTitle = capitalizedWords.join(" ");

formattedTitle = formattedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned Product Title: ${formattedTitle}`);
console.log(`Title Length: ${formattedTitle.length}`);
