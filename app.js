let hour = document.querySelector("#hrs") ;
let min = document.querySelector("#min") ;
let sec = document.querySelector("#sec") ;
let period = document.querySelector("#period");



setInterval(() => {
    let time = new Date();
  
    hour.innerHTML = (time.getHours()<10?"0":"") + time.getHours();

    min.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();

    sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds();

    period.innerHTML = (time.getHours()<=12 ? "AM":"PM");
},1000);

