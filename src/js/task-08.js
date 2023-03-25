const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log("This submit Form");
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Enter the data!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
