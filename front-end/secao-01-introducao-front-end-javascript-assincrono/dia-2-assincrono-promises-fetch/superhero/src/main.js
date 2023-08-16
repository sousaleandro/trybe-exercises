import Swal from 'sweetalert2';

const drafterBtn = document.querySelector('.drafter-btn');
const heroName = document.querySelector('.hero-name');
const heroImg = document.querySelector('.hero-img');
const API_LENGTH = 732;

const fetchHero = (id) => fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  .then((request) => request.json())
  .then((data) => {
    if (id !== data.id) {
      throw new Error('O id não representa um héroi');
    }
    return data;
  });

drafterBtn.addEventListener('click', (event) => {
  event.preventDefault();
  heroName.innerHTML = '';
  heroImg.src = '';
  const id = Math.round(Math.random() * (API_LENGTH - 1) + 1);
  fetchHero(id)
    .then((hero) => {
      const { name, images } = hero;

      heroName.innerHTML = name;
      heroImg.src = images.lg;
    })
    .catch((error) => {
      heroName.innerHTML = '';
      heroImg.src = '';
      return Swal.fire({
        title: 'Erro',
        text: error.message,
        icon: 'error',
      });
    });
});
