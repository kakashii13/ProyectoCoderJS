let reserve = document.getElementById("btn");


function getTime(){
  const schedule = document.querySelectorAll(".hour")
  
  schedule.forEach((hour) => {
    if(hour.checked === true){
      console.log(hour.id)
    }else {
      hour.disabled = true; 
    }
  })
}

reserve.addEventListener("click", () => {
  let spinner = document.getElementById("spinner");
  spinner.classList.add("spinner-border", "text-primary")
  getTime();
  setTimeout(() => {
    console.log("EXCELENTE, YA TIENE SU TICKET")
    spinner.classList.remove("spinner-border", "text-primary")
  }, 3000)
});



