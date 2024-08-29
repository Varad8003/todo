let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
let count=0;
const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerHTML="O";
            turno=false;
        }
        else{
            box.innerHTML="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
        count++;
        checkdraw();
    });
});
const checkdraw=()=>{
    if(count==9){
        msg.innerHTML=`The Game is Draw`;
        msgcontainer.classList.remove("hide");
    }
}
const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const showwinner=(winner)=>{
    msg.innerHTML=`Congratulaions Winner is "${winner}"`;
    msgcontainer.classList.remove("hide");
    disbaleboxes();
}
const disbaleboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const checkwinner=()=>{
    for(let patt of winpatt){
        let pos1val=boxes[patt[0]].innerHTML;
        let pos2val=boxes[patt[1]].innerHTML;
        let pos3val=boxes[patt[2]].innerHTML;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner",pos1val);
                showwinner(pos1val);
            }
        }

    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);