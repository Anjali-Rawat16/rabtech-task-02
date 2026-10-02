import { fetchProducts } from "./api.js";

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

let products = [];
localStorage.setItem("search", searchInput.value);
localStorage.setItem("category", categorySelect.value);
localStorage.setItem("sort", sortSelect.value);

const savedSearch = localStorage.getItem("search") || "";
const savedCategory = localStorage.getItem("category") || "all";
const savedSort = localStorage.getItem("sort") || "default";

searchInput.value = savedSearch;
categorySelect.value = savedCategory;
sortSelect.value = savedSort;

function renderProducts(items) {
  productList.innerHTML = "";

  if (items.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  items.forEach((product) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
    `;

    productList.appendChild(article);
  });
}

function updateProducts() {
  let filtered = [...products];

  const searchTerm = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;
  localStorage.setItem("search", searchTerm);
  localStorage.setItem("category", category);
  localStorage.setItem("sort", sort);

  if (searchTerm) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }

  if (category !== "all") {
    filtered = filtered.filter(
      (product) => product.category === category
    );
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

async function init() {
  try {
    productList.innerHTML = `
  <div class="loading-skeleton" aria-label="Loading products"></div>
  <div class="loading-skeleton" aria-label="Loading products"></div>
  <div class="loading-skeleton" aria-label="Loading products"></div>
`;
    products = await fetchProducts();

    const categories = [...new Set(products.map((product) => product.category))];

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    renderProducts(products);
  } catch (error) {
    productList.innerHTML = "<p>Unable to load products.</p>";
    console.error(error);
  }
}

searchInput.addEventListener("input", updateProducts);
categorySelect.addEventListener("change", updateProducts);
sortSelect.addEventListener("change", updateProducts);

init();