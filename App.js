const ticket_price=document.getElementById("name");
const seating=document.querySelectorAll(".seat");
const container=document.querySelector(".container");
const no_of_seats=document.getElementById("NoofSeats");
const total_price=document.getElementById("total_price");
let ticketprice= +ticket_price.value;
function updatecount(){
    const no_ofseats=document.querySelectorAll(".row .seat.selected");
    const seats_selected=no_ofseats.length;
    no_of_seats.innerText=seats_selected;
    total_price.innerText=seats_selected*(+ticketprice);
}

ticket_price.addEventListener("change",(e)=>{
   
   ticketprice= +e.target.value;
   updatecount();
   
})

container.addEventListener('click',(e)=>{
  if(e.target.classList.contains("seat") && !(e.target.classList.contains("occupied"))){
    e.target.classList.toggle("selected");
    updatecount();
  }
})
