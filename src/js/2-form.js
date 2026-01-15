const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const formState = localStorage.getItem('feedback-form-state');

if (formState) {
  const parsed = JSON.parse(formState);

  formData.email = parsed.email;
  formData.message = parsed.message;

  form.elements.email.value = parsed.email;
  form.elements.message.value = parsed.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = formData.email;
  const message = formData.message;

  if (email.trim() === '' || message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();

  formData.email = '';
  formData.message = '';
});
