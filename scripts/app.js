let theme = 'bright';

function changeColor()
{
    let background = document.querySelector('.header');
    let body = document.querySelector('body');
    let content = document.querySelector('.content');

    if(theme == 'bright')
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #120C6E, #5E72EB)';
        body.style.backgroundColor = 'rgb(80, 80, 80)';
        content.style.color = 'white';
        theme = 'dark';
    } else
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
        body.style.backgroundColor = 'white';
        content.style.color = 'black';
        theme = 'bright';
    }
}