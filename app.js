var td1 = document.getElementById("td1");
var td2 = document.getElementById("td2");
var td3 = document.getElementById("td3");
var td4 = document.getElementById("td4");
var td5 = document.getElementById("td5");
var td6 = document.getElementById("td6");
var td7 = document.getElementById("td7");
var td8 = document.getElementById("td8");
var td9 = document.getElementById("td9");

var count = 1;

function turn1(e){
    if(count = 1){
        td1.innerText = "X"
        td1.classList = "cross"
        count++
    }
    
}

function turn2(e){
    if(count = 2){
        td2.innerText = "O"
        td2.classList = "circle"
        count++
    }
    
}

function turn3(e){
    if(count = 3){
        td3.innerText = "X"
        td3.classList = "cross"
        count++
    }
}

function turn4(e){
    if(count = 4){
        td4.innerText = "O"
        td4.classList = "circle"
        count++
    }
}

function turn5(e){
    if(count = 5){
        td5.innerText = "X"
        td5.classList = "cross"
        count++
    }
}

function turn6(e){
    if(count = 6){
        td6.innerText = "O"
        td6.classList = "circle"
        count++
    }
}

function turn7(e){
    if(count = 7){
        td7.innerText = "X"
        td7.classList = "cross"
        count++
    }
}

function turn8(e){
    if(count = 8){
        td8.innerText = "O"
        td8.classList = "circle"
        count++
    }
}

function turn9(e){
    if(count = 9){
        td9.innerText = "X"
        td9.classList = "cross"
        count++
    }
}

function result(){
if(td1.innerText == "X" && td5.innerText == "X" && td9.innerText == "X"){
   alert("Player X wins")
}
else {
    alert("Player O wins")
}
}

function reset(){
    td1.innerText  = "";
    td2.innerText  = "";
    td3.innerText  = "";
    td4.innerText  = "";
    td5.innerText  = "";
    td6.innerText  = "";
    td7.innerText  = "";
    td8.innerText  = "";
    td9.innerText = ""
}

