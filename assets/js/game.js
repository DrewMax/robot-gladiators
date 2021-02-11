var playerName = window.prompt("What is your robots name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// debugger
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
    var shop = () => {
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
          );
       // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
        if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money!")
        }
      break;
    case "UPGRADE":
    case "upgrade":
        if(playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
        } else {
            window.alert("You don't have enough money!")
        }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }   
    }
    var startGame = function() {
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
      

        for (var i = 0; i < enemyNames.length; i++) {
          if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
            var pickedEnemyName = enemyNames[i];
      
            enemyHealth = 50;
      
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
              
                // if yes, take them to the store() function
                if (storeConfirm) {
                  shop();
                }
              }
          }
          else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
          }
        }
        endGame();
      };
        //function to end the enitre game
        var endGame = function() {
            // if player is still alive, player wins!
            if (playerHealth > 0) {
              window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
            } 
            else {
              window.alert("You've lost your robot in battle.");
            }
            var playAgainConfirm = window.confirm("Would you like to play again?") 
            if (playAgainConfirm) {
                //restart the game
                startGame();
             } else {
                window.alert("Thank you for playing Robot Gladiators! Come back soon!")
            }
          }

// var shop = () => {
//    console.log("entered the shop");
//         }
        
        
startGame()