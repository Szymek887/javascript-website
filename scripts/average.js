let theme='bright';

function calculate()
{
    let numbersField = document.querySelector('#numbers');
    let button = document.querySelector('#calculateButton')
    let wrapper = document.querySelector('.result');
    let result = document.querySelector('#average');
    let numbers = document.querySelector('#numbers').value;
    let average = 0;
    numbers = numbers.split(',');
    for (let number in numbers) 
    {
        numbers[number] = parseInt(numbers[number]);
        average += numbers[number];
    }
    average /= numbers.length;
    if(theme == 'bright')
    {
        wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
    } else
    {
        wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #003041, #424F60)';
    }
    result.innerHTML = average.toFixed(2);
}