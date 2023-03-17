const btns = document.getElementsByTagName('button');
const bckgrdBtns = document.getElementById('background-color').getElementsByTagName('button');
const fontClrBtns = document.getElementById('font-color').getElementsByTagName('button');
const fontSzBtns = document.getElementById('font-size').getElementsByTagName('button');
const lineHgtBtns = document.getElementById('line-height').getElementsByTagName('button');
const fontFmlBtns = document.getElementById('font-family').getElementsByTagName('button');

for (let idx = 0; idx < btnsArray.length; idx += 1) {
  btnsArray[idx].addEventListener('click', (event) => {
    const selectedBtn = document.querySelector('.selected');
    event.target.classList.add('selected');
    if (selectedBtn) {
      selectedTask.classList.remove('selected');
    }
  })
};
