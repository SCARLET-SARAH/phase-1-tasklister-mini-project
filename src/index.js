document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form")
  const inputDesc = document.querySelector('form > input#new-task-description')

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(inputDesc.value)
  })
});

