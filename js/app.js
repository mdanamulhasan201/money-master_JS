document.getElementById('calculate-btn').addEventListener('click', function(){
  const income=  document.getElementById('income').value;

  const foods = document.getElementById('food').value;
  const rents = document.getElementById('rent').value;
  const clothes = document.getElementById('clothes').value;

  const total = parseInt(foods) + parseInt(rents) + parseInt (clothes);

  const totalExpense = document.getElementById('total-expense')
  totalExpense.innerText  = total;

  if(isNaN(income)){
    return
}
if(isNaN(foods)){
    return
}
if(isNaN(rents)){
    return
}
if(isNaN(clothes)){
    return
}


  // if(isNaN(totalExpense, income)){
  //   alert('No Enough Balance Try Agin Later ');
   
  // }

const totalBalance = document.getElementById('balance')
totalBalance.innerText = parseInt(income) - parseInt(total);

})

// /

document.getElementById('calculate-2').addEventListener('click', function(){
  // total saving balance 
  const totalBalance = document.getElementById('balance').innerText;
  const save = document.getElementById('save').value;
  const saving = (totalBalance*save/100);
  const savingAmount = document.getElementById('saving-amount').innerText = saving;
  
//  total remaining Balance 
 const remaining =(totalBalance-savingAmount);
const totalRemaining = document.getElementById('remaining-balance').innerText = remaining;

})