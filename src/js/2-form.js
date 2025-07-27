let formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageTextarea = feedbackForm.elements.message;

const populateForm = () => {
  const savedData = localStorage.getItem(storageKey);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData = parsedData;
    emailInput.value = formData.email || '';
    messageTextarea.value = formData.message || '';
  }
};

populateForm();

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  feedbackForm.reset();
});