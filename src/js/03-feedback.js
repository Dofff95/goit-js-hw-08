import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const feedback = {
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};
const formData = {};

feedback.form.addEventListener('input', throttle(inputData, 500));
function inputData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

feedback.form.addEventListener('submit', throttle(submitForm, 500));
function submitForm(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  console.log({ email: email.value.trim(), message: message.value.trim() });
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}
writeFromStorage();
function writeFromStorage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const savedEmail = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    feedback.textarea.value = savedMessage || '';
    feedback.input.value = savedEmail || '';
  }
}
