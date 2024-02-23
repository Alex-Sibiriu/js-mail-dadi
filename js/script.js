// MAIL
const validMail = ['ugodeughi@email.it', 'alexsibiriu@email.it', 'boolean@email.it','ciao@ciao.it'];
const sendBtn = document.querySelector('.js-send');
const accessResult = document.querySelector('.js-access-result')

sendBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const userMail = document.querySelector('.js-user-email').value;

  for (let i = 0; i < validMail.length; i++) {
    if (userMail === validMail[i]) {
      accessResult.innerHTML = 'Accesso Consentito';
      accessResult.classList.add('text-success');
      accessResult.classList.remove('text-danger');
      i = validMail.length;
      //Ma return non era meglio?
    } else {
      accessResult.innerHTML = 'Accesso Negato';
      accessResult.classList.add('text-danger');
      accessResult.classList.remove('text-success');
    }
  }
})

// DICE
const playBtn = document.querySelector('.js-play');
const userDice = document.querySelector('.js-user-dice');
const pcDice = document.querySelector('.js-computer-dice');
const diceResult = document.querySelector('.js-dice-result');

playBtn.addEventListener('click', function() {

userDice.innerHTML = Math.ceil(Math.random() * 6);
pcDice.innerHTML = Math.ceil(Math.random() * 6);

if (userDice.innerHTML > pcDice.innerHTML) {
  diceResult.innerHTML = 'Hai Vinto!';
  diceResult.classList.add('text-success');
  diceResult.classList.remove('text-danger');
  diceResult.classList.remove('text-warning');
} else if (userDice.innerHTML < pcDice.innerHTML){
  diceResult.innerHTML = 'Hai Perso!';
  diceResult.classList.add('text-danger');
  diceResult.classList.remove('text-success');
  diceResult.classList.remove('text-warning');
} else {
  diceResult.innerHTML = 'Pareggio!';
  diceResult.classList.add('text-warning');
  diceResult.classList.remove('text-success');
  diceResult.classList.remove('text-danger');
}
})