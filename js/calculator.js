// *************** Assign variables ***************
const inputFields = document.querySelectorAll('.inputs');
const billInput = document.getElementById('bill');
let bill = billInput.value;
const tipPercent = document.getElementById('tip');
let tip = tipPercent.value;
const numOfPeople = document.getElementById('num-of-people');
let people = numOfPeople.value;
const tipAmount = document.querySelector('.tip-amount');
const tipPercentMinus = document.querySelector('.minus-tip');
const tipPercentPlus = document.querySelector('.plus-tip');
const numOfPeoplePlus = document.querySelector('.plus-people');
const numOfPeopleMinus = document.querySelector('.minus-people');
let tipOutput = document.querySelector('.tip-amount');
let totalOutput = document.querySelector('.total-amount');
let perPersonOutput = document.querySelector('.per-person-amount');

// *************** Assign variables ***************
// First: Create increase & decrease functions

const increasePercent = () => {
    let currentValue = parseInt(tipPercent.value);
    if (typeof currentValue !== 'number') {
        currentValue = 0
    } else {
        currentValue = currentValue;
    };
    currentValue++;
    tipPercent.value = currentValue;
    tip = currentValue;
};

const decreasePercent = () => {
    let currentValue = parseInt(tipPercent.value);
    if (typeof currentValue !== 'number' || currentValue < 1) {
        currentValue = 0;
    } else {
        currentValue = currentValue;
        currentValue--;
    };
    tipPercent.value = currentValue;
    tip = currentValue;
};

const increasePeople = () => {
    let currentValue = parseInt(numOfPeople.value);
    if (typeof currentValue !== 'number') {
        currentValue = 1
    } else {
        currentValue = currentValue;
    };
    currentValue++;
    numOfPeople.value = currentValue;
    people = currentValue;
};

const decreasePeople = () => {
    let currentValue = parseInt(numOfPeople.value);
    if (typeof currentValue !== 'number' || currentValue < 3) {
        currentValue = 1;
    } else {
        currentValue = currentValue;
        currentValue--;
    };
    numOfPeople.value = currentValue;
    people = currentValue;
};

// Then: add event listeners to the plus and minus buttons
tipPercentPlus.addEventListener('click', function () {
    increasePercent();
    doAllCalculations();
});
tipPercentMinus.addEventListener('click', function () {
    decreasePercent();
    doAllCalculations();
});
numOfPeoplePlus.addEventListener('click', function () {
    increasePeople();
    doAllCalculations();
});
numOfPeopleMinus.addEventListener('click', function () {
    decreasePeople();
    doAllCalculations();
});

// Add event listener to bill input
billInput.addEventListener('keydown', function (e) {
    let currentBillValue = Number(billInput.value);
    if (e.keyCode === 13) {
        if (isNaN(currentBillValue) || currentBillValue === '' || currentBillValue < 0) {
            bill = 0;
        } else {
            bill = billInput.value;
        }
    } else if (e.keyCode === 8) {
        bill = 0;
    };
    doAllCalculations();
}, false);

// Add event listener to tip %
tipPercent.addEventListener('keydown', function (e) {
    let currentPercentValue = Number(tipPercent.value);
    if (e.keyCode === 13) {
        if (isNaN(currentPercentValue) || currentPercentValue < 0) {
            tip = 0;
        } else {
            tip = tipPercent.value;
        }
    };
    doAllCalculations();
}, false);

// Add event listener to number of people
numOfPeople.addEventListener('keydown', function (e) {
    let currentNumOfPeople = Number(numOfPeople.value);
    if (e.keyCode === 13) {
        if (isNaN(currentNumOfPeople) || currentNumOfPeople < 1) {
            people = 0;
        } else {
            people = numOfPeople.value;
        }
    };
    doAllCalculations();
}, false);

// Add event listeners to all input fields
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        doAllCalculations();
    }
});

// *************** Calculate tip and total ***************
const calcTip = () => {
    let tips = (Number(bill) * Number(tip)) / 100;
    tipOutput.innerHTML = `$${tips.toFixed(2)}`;
};

const calcTotal = () => {
    let tips = (Number(bill) * Number(tip)) / 100;
    let totals = Number(bill) + Number(tips);
    totalOutput.innerHTML = `$${totals.toFixed(2)}`;
};

const calcPerPerson = () => {
    let tips = (Number(bill) * Number(tip)) / 100;
    let perPerson = (Number(bill) + Number(tips)) / people;
    perPersonOutput.innerHTML = `$${perPerson.toFixed(2)}`;
};

const doAllCalculations = () => {
    calcPerPerson()
    calcTip();
    calcTotal();
};