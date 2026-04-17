function generateAllPictures() {
  const cards = document.querySelectorAll(".featured-card");

  cards.forEach(card => {
    const flowerNameSpan = card.querySelector(".flower-name");
    const flowerImg = card.querySelector("img");

    if (flowerNameSpan && flowerImg) {
      const searchTerm = flowerNameSpan.textContent.trim();
      
      // Use LoremFlickr - it's much more stable for keyword searches
      // We also add a random number to the URL to prevent the browser 
      // from showing the same "random" image for every card.
      const randomSeed = Math.floor(Math.random() * 1000);
      flowerImg.src = `https://loremflickr.com/600/400/${searchTerm},flower?lock=${randomSeed}`;
      
      // Set loading to lazy to prevent the browser from getting overwhelmed
      flowerImg.loading = "lazy";
    }
  });
}