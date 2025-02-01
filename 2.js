let userscore = 0;
let compscore = 0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    let options = ["rock","paper","scissor"];
     const randidx =  Math.floor(Math.random() * 3);
     return options[randidx];
}

const drawgame = () => {
    console.log("game is draw ");
    msg.innerText = "GAME IS DRAW";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";

}
const showwinner = (userwin,userchoice,compchoice) => {
if(userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    console.log("You Win !");
    msg.innerText = `YOU WIN ! YOUR ${userchoice} beats Comp ${compchoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
} else {
    compscore++;
    compscorepara.innerText = compscore;
    console.log("You lose");
     msg.innerText =` YOU LOSE ! COMP ${compchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";

}
}

const playgame = (userchoice) => {
console.log("user choice =",userchoice);
const compchoice = gencompchoice();
console.log("comp choice =",compchoice);

if(userchoice == compchoice){
drawgame();
} else {
    let userwin = true;
    if(userchoice === "rock") {
      userwin =   compchoice === "paper" ? false : true;
    } else if(userchoice === "paper") {
      userwin =   compchoice === "scissor" ? false : true ;
    } else {
       userwin =  compchoice === "rock" ? false : true ;
    }
    showwinner(userwin,userchoice,compchoice);
}
};


choices.forEach((choice) => {
   
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");

playgame(userchoice);
    })
})
