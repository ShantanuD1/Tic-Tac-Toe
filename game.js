let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let result=document.querySelector("#msg");
let newbtn=document.querySelector("#new-button");
let msgcontainer=document.querySelector(".msg-container");

let turnO=true;

const resetGame=()=>{
    turnO=false;
    enambleboxes();
    msgcontainer.classList.add("hide");
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enambleboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerTEXT="";
    }
};

const winpattern=[
     [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6]  // diagonal
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="0";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;//for disable button not change after next time
        cheackwinpatter();
    });
});

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
});
newbtn.addEventListener("click", ()=>{
   boxes.forEach((box)=>{
    box.innerText="";
   })
});
function showWineer(winner){
    result.innerText=`congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
let cheackwinpatter=()=>{
    for( let pattern of winpattern){
     let pov1=boxes[pattern[0]].innerText;
     let pov2=boxes[pattern[1]].innerText;
     let pov3=boxes[pattern[2]].innerText;
     if(pov1!="" && pov2!==""&&pov3!=""){
        if(pov1===pov2&&pov2===pov3){
            showWineer(pov1);
        }
     }
  }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);



