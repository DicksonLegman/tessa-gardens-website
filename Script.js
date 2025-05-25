const flowerCategories = {
  "Romantic Flowers": [
    {
      name: "Red Rose Bouquet",
      price: "GHS 50",
      image: "https://images.unsplash.com/photo-1610213255434-f206c8f9d9b8",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20Red%20Rose%20Bouquet"
    },
    {
      name: "Pink Tulips",
      price: "GHS 40",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20Pink%20Tulips"
    }
  ],
  "Everyday Fresh Picks": [
    {
      name: "Sunflower Set",
      price: "GHS 35",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20Sunflower%20Set"
    },
    {
      name: "Daisy Bundle",
      price: "GHS 30",
      image: "https://images.unsplash.com/photo-1607860101383-24e2a7c62df3",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20Daisy%20Bundle"
    }
  ],
  "Wedding & Events": [
    {
      name: "Lily Basket",
      price: "GHS 60",
      image: "https://images.unsplash.com/photo-1609710228159-7ac76a7932de",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20Lily%20Basket"
    },
    {
      name: "White Roses Decor",
      price: "GHS 80",
      image: "https://images.unsplash.com/photo-1590080875921-944e34f42b2e",
      orderLink: "https://wa.me/233244264068?text=I%20want%20to%20order%20White%20Roses%20Decor"
    }
  ]
};

const flowerList = document.getElementById("flower-list");

for (const category in flowerCategories) {
  const section = document.createElement("div");
  section.innerHTML = `<h3>${category}</h3>`;
  section.className = "flower-category";

  const grid = document.createElement("div");
  grid.className = "flower-grid";

  flowerCategories[category].forEach(flower => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
      <img src="${flower.image}" alt="${flower.name}" />
      <h4>${flower.name}</h4>
      <p>${flower.price}</p>
      <a class="order-btn" href="${flower.orderLink}" target="_blank">Place Order</a>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  flowerList.appendChild(section);
}
document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const bouquet = document.getElementById("bouquet").value.trim();
  const contact = document.getElementById("contact").value.trim();

  const message = `Hello, my name is ${name}. I want a custom bouquet with these details: ${bouquet}. Contact: ${contact}`;
  const whatsappLink = `https://wa.me/233244264068?text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
});
