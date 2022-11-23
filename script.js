let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            //document.querySelector(".popup");
            //popup.classList.add("open-popup");
            //console.log(popup)
            document.querySelector(".wonheading").innerHTML = boxtext[e[0]].innerText + " Won"
            document.querySelector(".popup").style.visibility = "visible"
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            if (!isgameover){
                document.querySelector('.info').innerText  = "Turn for " + turn;
            } 
            checkWin();
            checkdraw();
            
        }
    })
})

const checkdraw = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    if(boxtext[0].innerHTML != "" && boxtext[1].innerHTML != ""  && boxtext[2].innerHTML != ""
    && boxtext[3].innerHTML != "" && boxtext[4].innerHTML != "" && boxtext[5].innerHTML != "" 
    && boxtext[6].innerHTML != "" && boxtext[7].innerHTML != "" && boxtext[8].innerHTML != ""){
        document.querySelector(".wonheading").innerHTML = "Its a Draw"
        document.querySelector(".popup").style.visibility = "visible"
    }
}

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector('.info').innerText  = "Turn for " + turn;
})

playagain.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector('.info').innerText  = "Turn for " + turn;
    document.querySelector(".popup").style.visibility = "hidden"
})

