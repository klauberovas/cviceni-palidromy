console.log('Funguju!');

const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'

const seznam = document.querySelector('ul');
const listItem = seznam.querySelectorAll('li');
const arrayListItem = Array.from(listItem);
console.log(arrayListItem);

arrayListItem.forEach((prvek) => {
  if (prvek.textContent === textPozpatku(prvek.textContent)) {
    prvek.classList.add('palindrom');
  }
});
