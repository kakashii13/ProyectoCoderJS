const inputName = document.querySelector(".input");

// funcion login
function login() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let error = document.getElementById("error");
    if (inputName.value == "") {
      error.textContent = "Debe ingresar un nombre.";
      inputName.classList.add("error");
    } else {
      error.remove();
      inputName.classList.remove("error");
      let spinner = document.getElementById("spinner");
      spinner.classList.add("spinner-border", "text-primary");
      setTimeout(() => {
        spinner.classList.remove("spinner-border", "text-primary");
        document.getElementById("ticket").click();
      }, 1500);
      setLS();
    }
  });
}

login();

function setLS() {
  localStorage.setItem("user", inputName.value);
}

function getLS() {
  let user = localStorage.getItem("user");
  console.log(user);
}

getLS();
