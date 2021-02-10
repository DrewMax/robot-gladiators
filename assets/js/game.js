var playerName = window.prompt("What is your robots name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this 
// console .log(playerName, playerAttack, playerHealth, playerMoney)
// console.log(enemyNames);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {
    // Alert users that they are starting the round
  while(enemyHealth > 0 && playerHealth > 0) {
     // giving the user the choice to fight 
    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")
 
 // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")

     // if yes (true), leave fight
 if (confirmSkip) {
         window.alert(playerName + " has chosen to skip the fight. Goodbye!");
         //subtract money from player money
     playerMoney = playerMoney - 10;
     console.log("playerMoney", playerMoney);
     break;
 }
 }

 // remove enemy's health by subtracting the amount set in the playerAttack variable
    // if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );
  
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

    // award player money for winning 
    playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
        }
     
      };
    }
    var startGame = function() {

        //reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("Welcome the Robot Gladiators! Round " + (i + 1));
    // pick new enenmy to fight based on the index of the enemyNames
        var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before start new fight
        enemyHealth = 50;
        //debugger 
        //pass the pickedEnemyName variables value into the fight function, where it will assume the value of the enemyName prameter
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  } 
//   startGame();
  endGame();
 }  //maybe        
        //  startGame()


        //function to end the enitre game
        var endGame = function() {
            // if player is still alive, player wins
            if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
        } else {
            window.alert("You've lost your robot in battle")
            }
        }
    
        var playAgainConfirm = window.confirm("Would you like to play again?") 
            if (playAgainConfirm) {
                //restart the game
                startGame();
            }
            else {
                window.alert("Thank you for playing Robot Gladiators! Come back soon!")
            }
        
        
        //ask player if they'd like to play again
        // var playAgainConfirm = wondow.confirm("Would you like to play again?") 
        
        // if (playAgainConfirm) {
        //     //restart the game
        //     startGame();
        // }
        // else {
        //     window.alert("Thank you for playing Robot Gladiators! Come back soon!")
        // }
startGame()