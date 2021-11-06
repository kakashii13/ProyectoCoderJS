let time = +prompt("Ingrese un horario en formato 24hs");
let output = "";

function findTime() {
  if (time == 10 || time == 12 || time == 14 || time == 20)
    return (output = "Felicidades! Ya tiene su ticket");
  else return (output = "No hay tickets disponibles en ese horario");
}

function printAnswer() {
  alert(findTime());
}

printAnswer();
