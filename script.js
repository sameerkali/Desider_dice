"use strict"

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const pname  = document.querySelector(".name");
const img1   =  document.querySelectorAll("img")[0];
const img2   =  document.querySelectorAll("img")[1];


const randomOne = Math.trunc(Math.random()*6) + 1;
const randomTwo = Math.trunc(Math.random()*6) + 1;


img1.src= `dice-${randomOne}.png`
img2.src= `dice-${randomTwo}.png`


var winner = ()=> {
    if (randomOne > randomTwo)
    {
        pname.innerHTML = ("P2-Win")
    }
    if (randomOne == randomTwo)   
    {
        pname.innerHTML = ("try again")
    }
    if(randomTwo > randomOne)
    {
        pname.innerHTML = ("P1-Win")
    }
}


let win = winner()
console.log(win)






