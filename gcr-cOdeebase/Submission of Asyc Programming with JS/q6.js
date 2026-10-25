// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Required output: each product's title, price with $, and image URL.
// The optional browser section creates product cards when a DOM is available.

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json();

    products.forEach(product => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${Number(product.price).toFixed(2)}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------------");
    });

    // Bonus: build simple product cards when run in a browser.
    if (typeof document !== "undefined") {
      let container = document.getElementById("product-container");

      if (!container) {
        container = document.createElement("div");
        container.id = "product-container";
        container.style.cssText =
          "display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;padding:16px;font-family:Arial";
        document.body.appendChild(container);
      }

      products.forEach(product => {
        const card = document.createElement("article");
        card.style.cssText = "border:1px solid #ddd;border-radius:8px;padding:12px;text-align:center";
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.style.cssText = "width:100px;height:100px;object-fit:contain";
        const title = document.createElement("h3");
        title.textContent = product.title;
        title.style.fontSize = "14px";
        const price = document.createElement("p");
        price.textContent = `$${Number(product.price).toFixed(2)}`;
        card.append(image, title, price);
        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
  }
}

fetchProducts();
