const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
  const parsed = JSON.parse(savedData);

  formData.email = parsed.email;
  formData.message = parsed.message;

  form.elements.email.value = parsed.email;
  form.elements.message.value = parsed.message;
}

form.addEventListener("input", event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", event => {
  event.preventDefault();

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  form.reset();

  formData.email = "";
  formData.message = "";
});
