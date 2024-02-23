// MAIL
const validMail = ['ugodeughi@email.it', 'alexsibiriu@email.it', 'boolean@email.it'];
const sendBtn = document.querySelector('.js-send');
const accessResult = document.querySelector('.js-access-result')

sendBtn.addEventListener('click', function(event) {
  event.preventDefault();

  const userMail = document.querySelector('.js-user-email').value;

  for (let i = 0; i < validMail.length; i++) {
    if (userMail === validMail[i]) {
      accessResult.innerHTML = 'Accesso Consentito';
      i = validMail.length;
      //Ma return non era meglio?
    } else {
      accessResult.innerHTML = 'Accesso Negato';
    }
  }
})

// DADI
