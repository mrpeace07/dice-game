document.getElementById("playAgain").addEventListener("click", function () {
    // Roll the dice and determine the winner when the button is clicked
  
    // Roll the first dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource1 = "./Dicee Challenge - Starting Files/assets/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  
    // Roll the second dice
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "./Dicee Challenge - Starting Files/assets/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
    // Determine the winner
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 won, Congratulations!" ;
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 won, Congratulations!";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw, play again!";
    }

    document.querySelector("h1").style.fontSize = "4rem";
  });
  