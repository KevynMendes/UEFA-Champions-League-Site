var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 6000);
}

function toggleGames() {
    var btnToggle = document.getElementById('btn-toggle');
    var gamesContainer = document.getElementById('games');
    var games = gamesContainer.getElementsByClassName('game');

    var showingIda = btnToggle.textContent === 'Jogos de Volta';

    var titleElement = gamesContainer.getElementsByTagName('h1')[0];
    titleElement.textContent = showingIda ? 'Jogos de Volta - Quartas de final' : 'Jogos de Ida - Quartas de final';

    var dateElements = gamesContainer.getElementsByTagName('h2');
    if (showingIda) {
        dateElements[0].textContent = 'Terça-feira, 16 de abril de 2024';
        dateElements[1].textContent = 'Quarta-feira, 17 de abril de 2024';
    } else {
        dateElements[0].textContent = 'Terça-feira, 9 de abril de 2024';
        dateElements[1].textContent = 'Quarta-feira, 10 de abril de 2024';
    }

    for (var i = 0; i < games.length; i++) {
        var gameDetails = games[i].querySelector('.game-details');
        var homeLogo = games[i].querySelector('.team-logo:first-of-type');
        var awayLogo = games[i].querySelector('.team-logo:last-of-type');

        if (showingIda) {
            // Atualiza para as informações dos jogos de volta
            if (gameDetails.textContent.includes('Arsenal')) {
                gameDetails.textContent = 'B. München vs Arsenal';
                homeLogo.src = './src/clubs/bayern.png';
                awayLogo.src = './src/clubs/arsenal.png';
            } else if (gameDetails.textContent.includes('Real Madrid')) {
                gameDetails.textContent = 'Man. City vs Real Madrid';
                homeLogo.src = './src/clubs/city.png';
                awayLogo.src = './src/clubs/real.png';
            } else if (gameDetails.textContent.includes('Atlético')) {
                gameDetails.textContent = 'B. Dortmund vs Atlético';
                homeLogo.src = './src/clubs/borussia.png';
                awayLogo.src = './src/clubs/atleti.png';
            } else if (gameDetails.textContent.includes('PSG')) {
                gameDetails.textContent = 'Barcelona vs PSG';
                homeLogo.src = './src/clubs/barcelona.png';
                awayLogo.src = './src/clubs/psg.png';
            }
        } else {
            // Atualiza para as informações dos jogos de ida
            if (gameDetails.textContent.includes('B. München')) {
                gameDetails.textContent = 'Arsenal vs B. München';
                homeLogo.src = './src/clubs/arsenal.png';
                awayLogo.src = './src/clubs/bayern.png';
            } else if (gameDetails.textContent.includes('Man. City')) {
                gameDetails.textContent = 'Real Madrid vs Man. City';
                homeLogo.src = './src/clubs/real.png';
                awayLogo.src = './src/clubs/city.png';
            } else if (gameDetails.textContent.includes('B. Dortmund')) {
                gameDetails.textContent = 'Atlético vs B. Dortmund';
                homeLogo.src = './src/clubs/atleti.png';
                awayLogo.src = './src/clubs/borussia.png';
            } else if (gameDetails.textContent.includes('Barcelona')) {
                gameDetails.textContent = 'PSG vs Barcelona';
                homeLogo.src = './src/clubs/psg.png';
                awayLogo.src = './src/clubs/barcelona.png';
            }
        }
    }

    btnToggle.textContent = showingIda ? 'Jogos de Ida' : 'Jogos de Volta';
}

