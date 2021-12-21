document.querySelector('#numbers').onkeydown = function(event)
{
    let e = event || window.event;
    if(e.keyCode == 13)
    {
        calculate();
    }
}

function calculate()
{
    let wrapper = document.querySelector('.result');
    let result = document.querySelector('#result');
    let numbers = document.querySelector('#numbers').value;
    let average = 0;
    numbers = numbers.split(',');
    for (let number in numbers) 
    {
        numbers[number] = parseFloat(numbers[number]);
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