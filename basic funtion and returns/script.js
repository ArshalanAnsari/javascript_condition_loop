/*function paragraph(){
    console.log("Hii There");
}

paragraph();
paragraph();
paragraph();

// return 

function sayMassage(){
    return("how are you")
}

let a=sayMassage();
console.log(a);

let b=a+ "return my statement";
console.log(b)*/
// let age= ("What Is your age?")
// if(age>10 && age<20){
//   console.log("ypur age lies between 10 and 20")
// }
// else{
//   console.log("your age doesnot lie between 10 and 20")
// }

const randomNumber=Math.floor(Math.random()*100) + 1;
let userGuess=prompt("Choose a Number between 1 and 100!");
let turns=0;

while(userGuess!=randomNumber){
  if(userGuess<randomNumber){
    userGuess=prompt("Your Guess is Too Low ! Try Again ")
  }
  else{
    userGuess=prompt("Your Guess is Too High ! Try Again ")
  }
  turns++;
}

const score = 100-turns;
console.log(`Congratulations Your Guess is Correct in ${turns} Turns ! and Your Score is ${score}`)