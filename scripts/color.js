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


    if(theme == 'bright')
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #003041, #424F60)';
        excersise1.style.animation = 'darkMode .5s forwards';
        excersise2.style.animation = 'darkMode .5s forwards';
        body.style.animation = 'goDark .5s forwards';
        content.style.color = 'white';
        menu.style.backgroundColor = '#003041';
        active.style.backgroundColor = 'rgb(29, 29, 29)'
        theme = 'dark';
    } else
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
        excersise1.style.animation = 'lightMode .5s forwards';
        excersise2.style.animation = 'lightMode .5s forwards';
        body.style.animation = 'goBright .5s forwards';
        content.style.color = 'black';
        menu.style.backgroundColor = '#FF9190';
        active.style.backgroundColor = '#db756e';
        theme = 'bright';
    }
}