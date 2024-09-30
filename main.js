const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const submit = document.getElementById('submit-form');
const reset = document.getElementById('reset');

reset.addEventListener('click', function(e){
    e.preventDefault();

    numberOne.value = '';
    numberTwo.value = '';
    numberOne.classList.remove('accept');
    numberTwo.classList.remove('accept');
    document.querySelector('.reset').style.display = 'none';
});

submit.addEventListener('click', function(e){
    e.preventDefault();

    if(numberTwo.value > numberOne.value){
        document.querySelector('.reset').style.display = 'flex';
    }else{
        document.querySelector('.error-message').style.display = 'block';
    }
});

numberOne.addEventListener('keyup', function(e){
    let number = parseInt(e.target.value);
    let numberArray = [];

    numberArray.push(number);

    numberOne.value = numberArray;

    teste(numberOne, numberTwo);
});

numberTwo.addEventListener('keyup', function(e){
    let number = parseInt(e.target.value);
    let numberArray = [];

    numberArray.push(number);
    numberTwo.value = numberArray;
    
    teste(numberOne, numberTwo);
});

function teste(numberOne, numberTwo){
    if(numberTwo.value > numberOne.value){
        numberOne.classList.remove('error');
        numberTwo.classList.remove('error');

        numberOne.classList.add('accept');
        numberTwo.classList.add('accept');

        document.querySelector('.error-message').style.display = 'none';

    }else{
        numberOne.classList.remove('accept');
        numberTwo.classList.remove('accept');

        numberOne.classList.add('error');
        numberTwo.classList.add('error');
    };
};