  let score1 = 0;
  let score2 = 0;
  let whoIsPlaying = 1;
  let timer = 30;
  let isGameStarted = false;

  let board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];

  const grilleAvecGagnant1 = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["X", "", "", "", "", "", ""],
    ["X", "", "", "", "", "", ""],
    ["X", "", "", "", "", "", ""],
    ["X", "", "", "", "", "", ""],
  ];

  const grilleAvecGagnant2 = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "X", "X", "", "", ""],
    ["", "X", "X", "X", "", "", ""],
  ];

  const grilleAvecGagnant3 = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "X", "X", "", "", ""],
    ["", "X", "X", "X", "", "", ""],
    ["X", "X", "X", "X", "", "", ""],
  ];

  const grilleAvecGagnant4 = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "O", "", "", ""],
    ["", "", "O", "X", "", "", ""],
    ["", "O", "X", "X", "", "", ""],
    ["O", "X", "X", "X", "", "", ""],
  ];

  const grilleSansGagnant = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "", "", ""],
    ["", "", "O", "X", "", "", ""],
    ["", "O", "X", "O", "", "", ""],
    ["O", "X", "O", "X", "", "", ""],
  ];

  window.onload = function () {
    let menuButton = document.querySelector(".pause-btn");
    let mainMenu = document.querySelector(".modal-menu");
    let pauseMenu = document.querySelector(".pause");
    let gameScreen = document.querySelector("main");
    let topBar = document.querySelector("header");
    let bottomBar = document.querySelector("footer");

    mainMenu.showModal();
    gameScreen.style.display = "none";
    topBar.style.display = "none";
    bottomBar.style.display = "none";

    menuButton.onclick = function () {
      pauseMenu.showModal();
    };

    document.querySelector(".continue-btn").onclick = function () {
      pauseMenu.close();
    };

    document.querySelector(".pause .restart-btn").onclick = function () {
      pauseMenu.close();
      startNewGame();
    };

    document.querySelector(".quit-btn").onclick = function () {
      pauseMenu.close();
      mainMenu.showModal();
      gameScreen.style.display = "none";
      topBar.style.display = "none";
      bottomBar.style.display = "none";
      startNewGame();
    };

    document.querySelector(".play-cpu").onclick = function () {
      mainMenu.close();
      gameScreen.style.display = "flex";
      topBar.style.display = "flex";
      bottomBar.style.display = "block";
      startNewGame();
    };

    document.querySelector(".play-human").onclick = function () {
      mainMenu.close();
      gameScreen.style.display = "flex";
      topBar.style.display = "flex";
      bottomBar.style.display = "block";
      startNewGame();
    };

    document.querySelector(".rules-btn").onclick = function () {
      mainMenu.close();
      document.querySelector(".modal-rules").showModal();
      bottomBar.style.display = "none";
    };

    document.querySelector(".close-rules").onclick = function () {
      document.querySelector(".modal-rules").close();
      mainMenu.showModal();
    };
  };

  function startNewGame() {
    score1 = 0;
    score2 = 0;
    isGameStarted = true;
    whoIsPlaying = 1;
    timer = 30;

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        board[row][col] = "";
      }
    }

    updateScreen();
    startCountdown();
  }

  function updateScreen() {
    document.getElementById("scorePlayer1").textContent = score1;
    document.getElementById("scorePlayer2").textContent = score2;
    document.querySelector(".countdown .large").textContent = timer + "s";
  }

  function startCountdown() {
    if (isGameStarted) {
      let countdown = setInterval(function () {
        timer = timer - 1;
        updateScreen();

        if (timer <= 0) {
          if (whoIsPlaying === 1) {
            whoIsPlaying = 2;
          } else {
            whoIsPlaying = 1;
          }
          timer = 30;
        }
      }, 1000);
    }
  }

  function checkWinner(grille) {
    let resultat = "";
    resultat = checkWinner(grilleAvecGagnant1);
    resultat = checkWinner(grilleAvecGagnant2);
    resultat = checkWinner(grilleAvecGagnant3);
    resultat = checkWinner(grilleAvecGagnant4);
    resultat = checkWinner(grilleSansGagnant);
    return resultat;
  }
