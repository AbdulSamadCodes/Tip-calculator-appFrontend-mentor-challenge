const totalBillInput = document.querySelector("[data-total-bill-input]");
const peopleInput = document.querySelector("[data-people-no]");
const perPersonAmountSpan = document.querySelector("[data-per-person-span]");
const totalAmountSpan = document.querySelector("[data-total-amount-span]");
const errorSpan = document.querySelector("[data-error-span]");

const tipPercentTabs = document.querySelectorAll("[data-percent-tab]");
const customInput = document.querySelector("[data-custom-input]");

const resetBtn = document.querySelector("[data-reset-btn]");

//function for setting backgrounds and active states */

function setActiveStates() {
  const deactivatedTabs = Array.from(tipPercentTabs).filter((tab) => tab !== this);
  deactivatedTabs.forEach((tab) => tab.style.backgroundColor = "hsl(183, 100%, 15%)");

  this.style.backgroundColor = "hsl(172, 67%, 45%)";
}

// function for doing all caculations 

function calculate() {
  if (peopleInput.value === "") errorSpan.innerText = "Can' be zero";

  const totalBill = parseFloat(totalBillInput.value);
  const noOfPeople = parseInt(peopleInput.value);
  const tipPercentage = Number(this.dataset.tabPercent) || Number(customInput.value);
  const perPersonAmount = Number(totalBill / noOfPeople.toFixed(2));

  /* caluclating tip amount */
  const tipAmount = (perPersonAmount * (tipPercentage / 100)).toFixed(2);
  perPersonAmountSpan.innerText = isNaN(tipAmount) ? "$0.00" : `$${tipAmount}`;

  const totalAmount = (Number(perPersonAmount) + Number(tipAmount)).toFixed(2);
  totalAmountSpan.innerText = isNaN(totalAmount) ? "$0.00" : `$${totalAmount}`;
}

tipPercentTabs.forEach((tab) => tab.addEventListener("click", setActiveStates));
tipPercentTabs.forEach((tab) => tab.addEventListener("click", calculate));

customInput.addEventListener("change", calculate);

/* function for reset all inputs and spans */

function reset() {
  totalBillInput.value = "";
  peopleInput.value = "";
  perPersonAmountSpan.innerText = "$0.00";
  totalAmountSpan.innerText = "$0.00";
}

resetBtn.addEventListener("click", reset);


