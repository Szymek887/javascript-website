
let userName;

function checkUser()
{
    userName = prompt('Podaj swoje imię:');
    let nameField = document.querySelector('#name');
    let content = document.querySelector('.content');
    nameField.innerHTML = userName + '!';
    content.style.animation = '1s ease-out 0s 1 forwards fadeIn'
}

checkUser();

while (userName == '' || userName == null)
{
    checkUser();
}
