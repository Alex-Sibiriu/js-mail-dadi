// MAIL
const validMail = ['ugodeughi@email.it', 'alex@email.it', 'boolean@email.it', 'ciao@ciao.it', 'a@a.a'];
const sendBtn = document.querySelector('.js-send');
const accessResult = document.querySelector('.js-access-result')

const playBtn = document.querySelector('.js-play');

sendBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const userMail = document.querySelector('.js-user-email').value;
  let resultColor;

  for (let i = 0; i < validMail.length; i++) {
    if (userMail === validMail[i]) {
      accessResult.innerHTML = 'Accesso Consentito';
      resultColor = 'text-success';
      playBtn.classList.remove('disabled');
      i = validMail.length;  //Volevo usare return ma non sapevo se era utilizzabile in questo esercizio
    } else {
      accessResult.innerHTML = 'Accesso Negato';
      resultColor = 'text-danger';
      playBtn.classList.add('disabled');
    }
  }

  accessResult.classList.remove('text-danger', 'text-success');
  accessResult.classList.add(resultColor);
})

// DICE
const userDice = document.querySelector('.js-user-dice');
const pcDice = document.querySelector('.js-computer-dice');
const diceResult = document.querySelector('.js-dice-result');

playBtn.addEventListener('click', function() {
  
  let resultColor;
  
  userDice.innerHTML = Math.ceil(Math.random() * 6);
  pcDice.innerHTML = Math.ceil(Math.random() * 6);

  if (userDice.innerHTML > pcDice.innerHTML) {
    diceResult.innerHTML = 'Hai Vinto!';
    resultColor = 'text-success';
  } else if (userDice.innerHTML < pcDice.innerHTML){
    diceResult.innerHTML = 'Hai Perso!';
    resultColor = 'text-danger';
  } else {
    diceResult.innerHTML = 'Pareggio!';
    resultColor = 'text-warning';
  }

  diceResult.classList.remove('text-success', 'text-danger', 'text-warning');
  diceResult.classList.add(resultColor);
})