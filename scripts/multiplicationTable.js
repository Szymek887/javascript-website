let content = document.querySelector('.multiplicationTable');

for(let i = 1; i <= 10; i++)
{
    content.innerHTML += '<div id="table' + i + '"></div>';
    for(let j = 1; j <= 10; j++)
    {
        let table = document.querySelector('#table' + i)
        table.innerHTML += '<p>' + i + ' * ' + j + ' = ' + (i*j) + '</p>';
    }
}