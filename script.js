document.addEventListener("keydown", pressedkey);
let operations = 0;
const funcs = "*+-/^%!";
const nums = "0123456789.";

function pressedkey(event){
    
    if (event.key === 'Backspace'){
        event.preventDefault();
        backspace();
    }
    if (event.key === 'Enter'){
        event.preventDefault();
        pressed_equals();
    }
    if ("()".includes(event.key)){
        document.getElementById("current").value += event.key;
    }    
    if (funcs.includes(event.key)){
        document.getElementById("current").value += event.key;
        operations++;
        check();
    }
    if (nums.includes(event.key)) {
        document.getElementById("current").value += event.key;
        check();
    }
}

function display(val){
    document.getElementById("current").value += val;
    if (funcs.includes(val)){
        operations++;
    }
    else{
        check();
    }
}

function clr(){
    document.getElementById("current").value = "";
    document.getElementById("result").value = "";
    operations--;
}

function backspace(){
    let str = document.getElementById("current").value;
    if(funcs.includes(str.slice(str.length - 1, str.length))){
        operations--;
    }
    let new_val = str.slice(0, str.length - 1);
    document.getElementById("current").value = new_val;
    check();
}



function solve(){
    let input_val = document.getElementById("current").value;
    let solved = math.evaluate(input_val);
    document.getElementById("result").value = solved;
}

function pressed_equals(){
    let new_input = document.getElementById("result").value;
    if(new_input !== ""){
        document.getElementById("current").value = new_input;
        document.getElementById("result").value = "";
    }
}

function check(){
    if(operations < 0){
        operations = 0;
    }
    if(operations > 0){
        solve();
    }
    else { document.getElementById("result").value = ""; }
}
