 const btn = document.querySelector('button');
 const body = document.querySelector('body');
 const colorsBg = ['teal', '#BE5A38', 'skyblue', 'violet', 'limegreen'];
 const colorsBtn = ['white', 'teal'];

 body.style.backgroundColor = 'white';
 btn.style.backgroundColor = 'teal';
 btn.addEventListener('click', changeColor);

 function changeColor () {
     const bgInt = parseInt(Math.random() * colorsBg.length);
     const btnInt = parseInt(Math.random() * colorsBtn.length);
     body.style.backgroundColor = colorsBg[bgInt];
     btn.style.backgroundColor = colorsBtn[btnInt];
 }