function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  colorText: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  conteiner: document.querySelector(".widget"),
};

const changeColor = () => {
  refs.colorText.textContent = getRandomHexColor();
  refs.conteiner.style.backgroundColor = refs.colorText.textContent;
};
refs.changeColorBtn.addEventListener("click", changeColor);
