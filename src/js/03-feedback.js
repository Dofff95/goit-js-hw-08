import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs ={
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textArea: document.querySelector(".feedback-form textarea")
}

refs.form.addEventListener("submit", throttle(formSubmit, 500));
// refs.email.addEventListener("input", inputText);
// refs.textArea.addEventListener("input", inputText);
populateTextarea();

refs.form.addEventListener("input", throttle(formInput, 500));

function formInput(e) {
  formData[e.target.name] = e.target.value;
  const formJson = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formJson);
  console.log(formJson);
};
function formSubmit(evt) {
  evt.preventDefault();
  const login = refs.email.value;
  const text = refs.textArea.value;
  if (login === "" || text === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    let obj = {
      email: login,
      message: text,
    };
    console.log(obj);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
};
// function inputText(evt) {
//   const message = evt.target.value;
//    localStorage.setItem(STORAGE_KEY, message);
// };  
function populateTextarea() {
  // let savedMessage = localStorage.getItem(STORAGE_KEY);
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // console.log(refs.form.elements);
    // form.elements[email]
    //form.elements[message]
    // refs.form.value = parsedSettings;
    for (let key in formData) {
      refs.form.elements[key].value = formData[key];      
    }
  }
}














