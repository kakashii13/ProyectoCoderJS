let reserve = $("#btn_reserve");

// function selected hour id
function getTime() {
  const schedule = document.querySelectorAll(".hour");

  let time = [];

  schedule.forEach((hour) => {
    if (hour.checked) {
      time.push(hour.id);
    }
  });

  return time;
}

// create alerta
class Alert {
  constructor(alerta) {
    this.alerta = alerta;
  }

  alertDangerOne() {
    this.alerta.classList.add("alert", "alert-danger", "alerta--transition");
    this.alerta.innerText = "No puede seleccionar mas de un horario";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  alertDangerTwo() {
    this.alerta.classList.add("alert", "alert-danger", "alerta--transition");
    this.alerta.innerText = "Debe seleccionar un horario";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  alertSuccess() {
    this.alerta.classList.add("alert", "alert-success", "alerta--transition");
    this.alerta.innerText = "Felicidades ya tiene su ticket!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}

// function reserved
reserve.click(() => {
  // alert
  const alert = document.querySelector("#alert");
  // get time id
  const time = getTime();

  if (time.length !== 0) {
    if (time.length >= 2) {
      let alerta = new Alert(alert);
      alerta.alertDangerOne();
    } else {
      // add class to spinner
      let spinner = document.getElementById("spinner");
      spinner.classList.add("spinner-border", "text-primary");

      // function answer
      setTimeout(() => {
        spinner.classList.remove("spinner-border", "text-primary");
        let alerta = new Alert(alert);
        alerta.alertSuccess();
      }, 1500);
    }
  } else {
    let alerta = new Alert(alert);
    alerta.alertDangerTwo();
  }
});

// Local storage value
const getLS = () => {
  let user = localStorage.getItem("user");
  return user;
};

// insertar como titulo userName

const userName = () => {
  let titleName = $("#title_user");
  titleName.html(`Bienvenido ${getLS()}, <p>seleccione un horario</p>`);
};

userName();
