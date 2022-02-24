'use strict';
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random()*20)+1;
document.querySelector(".score").textContent = score;
console.log(number);
document.querySelector('.check').addEventListener('click', function() 
{
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    } else if (guess == number) {
        document.querySelector(".message").textContent = "😃 Correct!";
        document.querySelector(".number").textContent = number;

        document.querySelector('body').style.backgroundColor = "#3c7938";
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess < number) {
        if (score > 0){
            score -=1;
            document.querySelector(".message").textContent = "😧 Too Low!";
            document.querySelector(".score").textContent = score;
        } else {document.querySelector(".message").textContent = "😢 You Lose";}

    } else if (guess > number) {
        if (score > 0){
            score -=1;
            document.querySelector(".message").textContent = "😧 Too High!";
            document.querySelector(".score").textContent = score;
        } else {document.querySelector(".message").textContent = " You Lose!";}
    }
}
);
document.querySelector('.again').addEventListener('click', function() 
{
    number = Math.trunc(Math.random()*20)+1;
    console.log(number);
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".guess").value = " ";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = 20;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    score =20;
});