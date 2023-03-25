const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredient = document.querySelector("#ingredients");
const elements = ingredients.map((ell) => {
  const listEl = document.createElement("li");
  listEl.classList.add(".item");
  listEl.textContent = ell;
  return listEl;
});

console.log(elements);
ingredient.append(...elements);
