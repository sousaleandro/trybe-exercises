
function maiorPalavra(array) {
  let biggestWord = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
      biggestWord = array[index];
    }
  } return biggestWord
}


console.log(maiorPalavra(['java', 'javascript', 'python', 'html', 'css']));