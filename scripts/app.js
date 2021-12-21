let theme = 'bright';

function changeColor()
{
    let background = document.querySelector('.header');
    let body = document.querySelector('body');
    let content = document.querySelector('.content');
    let excersise1 = document.querySelector('.excersise1');
    let excersise2 = document.querySelector('.excersise2');
    let menu = document.querySelector('#menu');
    let active = document.querySelector('.active');
    let footer = document.querySelector('.footer');
    let numbersField = document.querySelector('#numbers');
    let button = document.querySelector('#calculateButton')
    let wrapper = document.querySelector('.result');
    let result = document.querySelector('#average');
    let multiplicationTable = document.querySelector('.multiplicationTable');

    if(theme == 'bright')
    {
        if(excersise1 != null)
        {
            excersise1.style.animation = 'darkMode .5s forwards';
            excersise2.style.animation = 'darkMode .5s forwards';
        }
        
        if(numbersField != null)
        {
            numbersField.style.backgroundColor = '#003041';
            numbersField.style.color = 'white';
            button.style.backgroundColor = '#424F60';
            button.style.color = 'white';
            if(result.innerHTML != '')
            {
                wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #003041, #424F60)';
            }
        }

        if(multiplicationTable != null)
        {
            for(let i = 1; i <= 10; i++)
            {
                document.querySelector('#table' + i).style.backgroundColor = '#003041';
            }
        }

        background.style.backgroundImage = 'linear-gradient(to bottom right, #003041, #424F60)';
        body.style.animation = 'goDark .3s forwards';
        content.style.color = 'white';
        menu.style.backgroundColor = '#003041';
        active.style.backgroundColor = 'rgb(29, 29, 29)'
        footer.style.backgroundColor = '#003041';
        theme = 'dark';
    } else
    {
        if (excersise1 != null) 
        {
            excersise1.style.animation = 'lightMode .5s forwards';
            excersise2.style.animation = 'lightMode .5s forwards';
        }
        
        if(numbersField != null)
        {
            numbersField.style.backgroundColor = '#FF9190';
            numbersField.style.color = 'black';
            button.style.backgroundColor = '#FDC094';
            button.style.color = 'black';
            if(result.innerHTML != '')
            {
                wrapper.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
            }
        }
        
        if(multiplicationTable != null)
        {
            for(let i = 1; i <= 10; i++)
            {
                document.querySelector('#table' + i).style.backgroundColor = '#FF9190';
            }
        }

        background.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
        body.style.animation = 'goBright .3s forwards';
        content.style.color = 'black';
        menu.style.backgroundColor = '#FF9190';
        active.style.backgroundColor = '#db756e';
        footer.style.backgroundColor = '#FF9190';
        theme = 'bright';
    }
}