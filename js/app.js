const TOTAL_VALUE = document.querySelector('.total-value');

let level = document.querySelector('.level-value');
let progressBar = document.querySelector('progress');
let cashbackPercentage = document.querySelector('.cashback-value');
let balance = document.querySelector('.balance');
let submit = document.querySelector('.btn-buy');

submit.addEventListener('click', function(){

    cashbackCalc(TOTAL_VALUE.innerHTML, cashbackPercentage.innerHTML);
    levelUpdate();
});

function cashbackCalc(totalValue, cashbackValue){
    let result = parseFloat(totalValue) * (parseFloat(cashbackValue) / 100);

    balance.innerHTML = parseFloat(balance.innerHTML) + result;
}

function levelUpdate(){
    progressBar.value += Math.floor(Math.random() * (20 - 1 + 1) + 1);

    if(progressBar.value === 100){
        level.innerHTML = parseInt(level.innerHTML) + 1;
        if(parseInt(cashbackPercentage.innerHTML) != 10){
            cashbackPercentage.innerHTML = parseInt(cashbackPercentage.innerHTML) + 1;
        }
        progressBar.value = 0;
    }
}