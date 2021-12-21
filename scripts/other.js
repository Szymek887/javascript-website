let result = document.querySelector('#result');
let wrapper = document.querySelector('.result');

let score = 0;

function dodaj()
{
    let numbers = document.querySelector('#numbers').value;
    numbers = numbers.split(',');

    score = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i++) 
    {
        score += parseFloat(numbers[i]);
    }

    showResult(score);
}

function odejmij()
{
    let numbers = document.querySelector('#numbers').value;
    numbers = numbers.split(',');

    score = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i++) 
    {
        score -= parseFloat(numbers[i]);
    }

    showResult(score);
}

function pomnoz()
{
    let numbers = document.querySelector('#numbers').value;
    numbers = numbers.split(',');

    score = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i++) 
    {
        score *= parseFloat(numbers[i]);
    }

    showResult(score);
}

function podziel()
{
    let numbers = document.querySelector('#numbers').value;
    numbers = numbers.split(',');

    score = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i++) 
    {
        score /= parseFloat(numbers[i]);
    }

    showResult(score);
}

function showResult(score)
{
    if(theme == 'bright')
    {
        wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
    } else
    {
        wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #003041, #424F60)';
    }
    result.innerHTML = score;
}