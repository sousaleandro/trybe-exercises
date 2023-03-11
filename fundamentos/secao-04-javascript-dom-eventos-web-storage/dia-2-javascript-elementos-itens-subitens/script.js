const getBody = document.getElementsByTagName('body')[0];
let itemList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'set', 'oito', 'nove', 'dez']

const tagCreator = (tagName, tagContent, parentTag, tagClass) => {
  let createTag = document.createElement(tagName);
  createTag.innerHTML = tagContent;
  createTag.classList = tagClass;
  parentTag.appendChild(createTag);
};

const listCreator = () => {
  for (let index = 0; index < itemList.length; index += 1) {
    let item = itemList[index];
    let getListItem = document.createElement('li');
    getListItem.innerText = itemList[index];
    getListItem.classList = 'list-item';
    getUl.appendChild(getListItem);
  }
};

tagCreator('h1', 'TrybeTrip - Agência de Viagens', getBody, 'main-title');
const getTitle = document.getElementsByClassName('main-title')[0];
tagCreator('main', '', getBody, 'main-content');
const getMain = document.getElementsByClassName('main-content')[0];
tagCreator('section', '', getMain, 'center-content');
const getSection = document.getElementsByClassName('center-content')[0];
tagCreator('p', '', getSection, 'center-paragraph');
const getParagraph = document.getElementsByClassName('center-paragraph')[0];
tagCreator('section', '', getMain, 'left-paragraph');
const getLeftParagraph = document.getElementsByClassName('left-paragraph')[0];
tagCreator('section', '', getMain, 'right-paragraph');
const getRightParagraph = document.getElementsByClassName('right-paragraph')[0];
tagCreator('img', '', getLeftParagraph, 'small-image');
const getImg = document.getElementsByClassName('small-image')[0];
getImg.src = 'https://picsum.photos/200';
tagCreator('ul', '', getRightParagraph, 'unordered-list');
const getUl = document.getElementsByClassName('unordered-list')[0];
listCreator();
tagCreator('h3', 'sub title', getMain, 'sub-title');
tagCreator('h3', 'sub title', getMain, 'sub-title');
tagCreator('h3', 'sub title', getMain, 'sub-title');

