const fetchHero = (id) => fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  .then((request) => request.json())
  .then((data) => console.log(data));

fetchHero('1');
