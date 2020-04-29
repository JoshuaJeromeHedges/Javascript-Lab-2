// Declaring the randomDamage function
const randomDamage = () => Math.floor(Math.random() * 10) + 1;
// calling or invoking the function within a console.log statement
console.log(randomDamage());

// Declare an arrow function named chooseOption that has two parameters named opt1 and opt2. chooseOption does two things:
// Declares and initializes a variable named randNum to either a 0 or 1, randomly
//  Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary operator)
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  //   is random number equal to 0? opt is true opt2 is false
  return randNum === 0 ? opt1 : opt2;
};
console.log(chooseOption("test1", "test2"));

// Declare a function expression named attackPlayer that has one parameter named
// health which returns a number equal to health minus the product of the
// randomDamage function.
function attackPlayer(health) {
  return health - randomDamage();
}
console.log(attackPlayer(100));

// Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// Declare an arrow function named isDead that has one parameter named health
// which returns a boolean value of true or false based on the following condition: health
// <= 0;

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

// Declare a function declaration named fight that has four parameters.
//  Parameters:
//  player1 - this will hold the name of the first player
//  player2 - this will hold the name of the second player
//  player1Health - this will hold the health of the first player
//  player2Health - this will hold the health of the second player

function fight(player1, player2, player1Health, player2Health) {
  // Within the fight function, write a while loop that loops while true
  var attacker = chooseOption (player1, player2) = {
    
    while (attacker = player1) {
      return (player2Health = attackPlayer);
    }
  };


// Set player2Health equal to the product of attackPlayer with
// player2Health as its argument.
