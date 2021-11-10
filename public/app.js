let time = +prompt("Ingrese un horario en formato 24hs");
let output = "";
let timeSelected = [];

class Ticket {
  constructor(time){
    this.time = time;
  }

  findTime(){
    if (time == 10 || time == 12 || time == 14 || time == 20)
    return (output = "Felicidades! Ya tiene su ticket");
    else return (output = "No hay tickets disponibles en ese horario");
  }

  addArray(){
    timeSelected.push(time)
  }

  printAnswer() {
    alert(this.findTime());
  }
}

let turn = new Ticket(time);
turn.findTime();
turn.printAnswer();
turn.addArray();

console.log(timeSelected)