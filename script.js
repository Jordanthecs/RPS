'use strict';

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let userPic = document.querySelector(".you");
let compPic = document.querySelector(".computer");
let text = document.querySelector(".announce");

let player;

let compPick;

rock.addEventListener('click',function(){
    player = 2;
    userPic.src = `YouPick${player}.png`;
    compPick = Math.floor(Math.random()*3+1);
    if(compPick == 1){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU WIN!";
    }else if(compPick == 2){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "TIE!";
    }else if(compPick == 3){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU LOSE!";
    }
});

paper.addEventListener('click',function(){
    player = 3;
    userPic.src = `YouPick${player}.png`;
    compPick = Math.floor(Math.random()*3+1);
    if(compPick == 1){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU LOSE!";
    }else if(compPick == 2){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU WIN!";
    }else if(compPick == 3){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "TIE!";
    }
});

scissors.addEventListener('click',function(){
    player = 1;
    userPic.src = `YouPick${player}.png`;
    compPick = Math.floor(Math.random()*3+1);
    if(compPick == 1){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "TIE!";
    }else if(compPick == 2){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU LOSE!";
    }else if(compPick == 3){
        compPic.src = `CompPick${compPick}.png`;
        text.textContent = "YOU WIN!";
    }
});
