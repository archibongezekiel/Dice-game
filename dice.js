
let text1 = Math.floor(Math.random() * 6) + 1;

let text2 = "dices/download" + text1 + ".png";

//let text3 = "dices/" + text2 ;
 document.querySelectorAll("img")[0].setAttribute("src", text2); 

//image2
let text4 = Math.floor(Math.random() * 6) + 1 ;

let text5 = "dices/download" + text4 + ".png";

//let text3 = "dices/" + text2 ;
 document.querySelectorAll("img")[1].setAttribute("src", text5); 

 if (text1 > text4){
     document.querySelector("h1").innerHTML = "⛳️ player 1 win"
 }else if (text4 > text1){
    document.querySelector("h1").innerHTML = "⛳️ player 2 win"
 } else{
    document.querySelector("h1").innerHTML = "Draw"
 }