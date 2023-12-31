let calculation = localStorage.getItem('calculation') || ''; 
// this means if this true and other false

function updateCalculation(value){
  calculation += value;
  //console.log(calculation);
  displayCalculation();
  localStorage.setItem('calculation',calculation);
}        

function displayCalculation(){
  document.querySelector('.display-calculation')
  .innerHTML = calculation;
}
