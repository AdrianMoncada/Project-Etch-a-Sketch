const container = document.querySelector('#container');
container.style.backgroundColor = 'gray'




function grid(rows, columns) {
  divs = rows*columns
  container.style.gridTemplateRows = 'repeat(' + rows + ', 1fr';
  container.style.gridTemplateColumns = 'repeat(' + columns + ', 1fr';
  container.style.width = '500px'
  container.style.height = '500px'
  

  

  for(let i = 1; i <= divs; i++) {
    const content = document.createElement('div');
    content.classList.add('content')
    content.setAttribute("id", "box")
    content.style.backgroundColor = 'gray'
    container.appendChild(content);
  }
}

grid(16,16)

const gridDivs = document.querySelectorAll('.content');

gridDivs.forEach((content) => {

content.addEventListener('mouseenter', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  content.style.backgroundColor = '#'+ randomColor;
  });
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  gridDivs.forEach((content) => {
    var el = document.getElementById('container');

while ( el.firstChild ) el.removeChild( el.firstChild );
    });
    const aNumber = Number(window.prompt("Type a number", ""));

    if (aNumber <= 100) {
      
      grid(aNumber, aNumber)
      const gridDivs = document.querySelectorAll('.content');

gridDivs.forEach((content) => {

content.addEventListener('mouseenter', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    content.style.backgroundColor = '#'+ randomColor;
  });
});
    }
});





