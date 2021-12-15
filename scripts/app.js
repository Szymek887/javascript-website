let theme = 'bright';

function changeColor()
{
    let background = document.querySelector('.header');
    let body = document.querySelector('body');
    let content = document.querySelector('.content');

    if(theme == 'bright')
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #120C6E, #5E72EB)';
        body.style.animation = 'goDark .5s forwards';
        content.style.color = 'white';
        theme = 'dark';
    } else
    {
        background.style.backgroundImage = 'linear-gradient(to bottom right, #FF9190, #FDC094)';
        body.style.animation = 'goBright .5s forwards';
        content.style.color = 'black';
        theme = 'bright';
    }
}