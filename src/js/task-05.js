const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

const onInputChange = ({ currentTarget }) => {
  if (currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymus";
  } else {
    refs.nameLabel.textContent = currentTarget.value;
  }
};
refs.input.addEventListener("input", onInputChange);
