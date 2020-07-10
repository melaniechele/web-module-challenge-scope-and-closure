// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * The difference is that counter 1 uses a closure.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter one because it is taking a creating a constant and giving it the value of the function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter two doesn't ever go away because the count is global 
 * counter one count is protected.
 * counter 1 would be preferable if they wanted to keep adding to the scores already gotten. counter 2 would be preferable if they wanted to reset it very time. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log(counter1);




// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.floor(Math.random() * Math.floor(3));
    return score;
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(func, gameLength){

let objScor = {away: 0, home: 0};
for (let i = 1 ; i <= gameLength; i++){
objScor.home = objScor.home + func();
objScor.away = objScor.away + func();
} 
  return objScor;

}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */


function getInningScore (callback) {
  let inningScore = {away: 0, home: 0};
  inningScore.away = inningScore.away + callback();
  inningScore.home = inningScore.home + callback();
  console.log ("This is the inning score " + inningScore.away + "-" + inningScore.home)
return inningScore  
}


function scoreboard(callback, otherCallback, gameLength) {
  console.log ("Here's scoreboard redux inning by inning");
  let myFinalScore = {away: 0, home: 0};
 
  
  for (let i = 1; i <= gameLength; i++) {
     let inningScore = {away: 0, home: 0};
     // this it the where everything gets put together
     inningScore = otherCallback(callback);
     
     // where all the math happens 
     myFinalScore.away = myFinalScore.away + inningScore.away;
     myFinalScore.home = myFinalScore.home + inningScore.home;
     
    switch (i) {
      case 1:
          console.log (`${i}st inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      case 2:
          console.log (`${i}nd inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      case 3:
          console.log (`${i}rd inning: ${myFinalScore.away} - ${myFinalScore.home}`);
          break;
      default:
          console.log (`${i}th inning: ${myFinalScore.away} - ${myFinalScore.home}`);
    }
  }
  
   
  console.log (`The final score is Away ${myFinalScore.away} - Home ${myFinalScore.home}`)
  return myFinalScore;
}
scoreboard(inning, getInningScore, 9);