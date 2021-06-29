document.querySelector(".btn-click").addEventListener("click", validate);


function validate() {


  if (document.getElementById('amount').value == "") {
    alert("Please enter a valid bill amount");
  } else if (document.getElementById('tip').value == "Select %") {
    alert("Please select a valid tip percentage");
  } else if (document.getElementById('people').value == "") {
    alert("Please enter a valid headcount");
  }else{
    calculate();
  }

}


function calculate() {

  var amount = Number(document.getElementById('amount').value);
  var tip_percent = Number(document.getElementById('tip').value);
  var people = Number(document.getElementById('people').value);


  var individual_tip = 0;
  var total_tip = 0;
  var individual_total = 0;
  var total_total = 0;



  if (people === 1) {

    total_tip = individual_tip = Math.round((amount * tip_percent + Number.EPSILON) * 100) / 100;

    total_total = individual_total = Math.round((amount + amount * tip_percent + Number.EPSILON) * 100) / 100;

    document.querySelector(".ind-tip").innerHTML = individual_tip;
    document.querySelector(".ind-total").innerHTML = individual_total;
    document.querySelector(".total-tip").innerHTML = total_tip;
    document.querySelector(".total-total").innerHTML = total_total;
  } else {

    total_tip = Math.round((amount * tip_percent + Number.EPSILON) * 100) / 100;
    individual_tip = Math.round((amount * tip_percent + Number.EPSILON) * 100 / people) / 100;

    total_total = Math.round((amount + amount * tip_percent + Number.EPSILON) * 100) / 100;

    individual_total = Math.round((amount + amount * tip_percent + Number.EPSILON) * 100 / people) / 100;


    document.querySelector(".ind-tip").innerHTML = individual_tip;
    document.querySelector(".ind-total").innerHTML = individual_total;
    document.querySelector(".total-tip").innerHTML = total_tip;
    document.querySelector(".total-total").innerHTML = total_total;

  }






}
