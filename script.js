let box = Array.from(document.querySelectorAll(".box"));
let tapmusic = new Audio("./tapmusic.mp3");
let winnermusic = new Audio("./winner.mp3");
let resetmusic = new Audio("./reset.mp3");
let turn = "X";
let gameover = false;
let khatm = false;
const changeturn = () => {
  return turn == "X" ? "0" : "X";
};

let info = document.getElementById("info");

// let abc=
let num = null;
// num+=2;
// console.log(num)

const gamewin = () => {
  let win = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];
  win.forEach((e) => {
    // console.log(e.length);
    let boxtext = document.getElementsByClassName("boxtext");
    // console.log(boxtext[4]);
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      gameover = true;
      info.innerText = "The Winner is " + boxtext[e[0]].innerText;
      document.getElementById("line").style.width = "30vw";
      document.getElementById(
        "line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg) `;

      tapmusic.pause();
      winnermusic.play();
      gameover = false;
      khatm = true;
      // setTimeout(() => {

      //   document.querySelector(".container").innerHTML=""
      // }, 8000);

      // setTimeout(() => {
      //   // turn=""
      //   // turn = boxtext[e[0]].innerText;
      //   // turn = changeturn();
      //   info.innerText = "turn of " + turn;
      //   // gameover = false;
      //   // turn = changeturn();

      //   // info.innerText=""
      //   // turn = changeturn();
      // }, 1000);
    }
  });
};

box.forEach((element) => {
  num = num + 1;

  element.addEventListener("click", () => {
    let a = element.querySelector(".boxtext");

    // console.log(a.innerHTML="hey");
    // console.log("hey working");
    // console.log(a.innerHTML);
    // console.log(a);

    if (a.innerHTML == "" && khatm != true) {
      element.style.backgroundColor = "antiquewhite";
      a.innerText = turn;
      turn = changeturn();
      tapmusic.play();
      if (gameover != true) {
        info.innerText = "turn of " + turn;
        gamewin();
        // element.style.ba
      }
    }
    // console.log(mynum);
  });
});
// num+=5;

console.log(num);
if (num == 9) {
  info.innerText = "start Game And turn of X";
}

let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  resetmusic.play();
  Array.from(boxtext).forEach((e) => {
    e.innerText = "";
    turn = "X";
    info.innerText = "turn of " + turn;
    info.innerText = "start Game And turn of X";
    // element.style.backgroundColor="white"

    document.getElementById("line").style.width = "0vw";
    // let box =document.getElementsByClassName("box");
    // box.forEach((e)=>{
    //   e.style.backgroundColor="white";
    })
});

