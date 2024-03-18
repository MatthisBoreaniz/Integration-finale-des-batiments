let isAnimationActive = false;

document.querySelector('#NuitJour').addEventListener('click', function() {
  if (!isAnimationActive) {
    document.body.style.backgroundColor = '#F9EB9B';
    document.querySelector('#Bat').style.opacity = '0';
    document.querySelector('#Lune').style.opacity = '0';
    document.querySelector('#Virvoltant').style.opacity = '1';
    this.style.backgroundColor = 'purple'; // Ajout de cette ligne
    this.style.color = 'white'; // Ajout de cette ligne
    this.textContent = 'Nuit'; // Ajout de cette ligne

    isAnimationActive = true;
  } else {
    document.body.style.backgroundColor = ''; // Remplacez '' par la couleur d'origine du body
    document.querySelector('#Bat').style.opacity = '1';
    document.querySelector('#Lune').style.opacity = '1';
    document.querySelector('#Virvoltant').style.opacity = '0';
    this.style.backgroundColor = ''; // Ajout de cette ligne
    this.style.color = ''; // Ajout de cette ligne
    this.textContent = 'Jour'; // Ajout de cette ligne

    isAnimationActive = false;
  }
});

