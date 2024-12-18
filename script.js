document.addEventListener("keydown", pressedkey);
let show_result = false;

function pressedkey(event){
    
    if (event.key === 'Backspace'){
        event.preventDefault();
        backspace();
    }
    if (event.key === 'Enter'){
        event.preventDefault();
        solve();
    }
    if ("*+-/".includes(event.key)){
        show_result = true;
    }
    if ("0123456789.".includes(event.key)) {
        document.getElementById("current").value += event.key;
        check()
    }
}

function display(val){
    if ("*+-/^".includes(val)){
        show_result = true;
    }
    document.getElementById("current").value += val;
}

function clr(){
    document.getElementById("current").value = "";
    document.getElementById("result").value = "";
    show_result = false;
}

function backspace(){
    let str = document.getElementById("current").value;
    if("*+-/^".includes(str.slice(str.length - 1, str.length))){
        show_result = false;
    }
    let new_val = str.slice(0, str.length - 1);
    document.getElementById("current").value = new_val;
    check();
}

// function sqr(){
//     let str = document.getElementById("current").value;
//     document.getElementById("current").value = str + "^2";
// }

function solve(){
    let input_val = document.getElementById("current").value;
    let solved = math.evaluate(input_val);
    show_result = true;
    document.getElementById("result").value = solved;
}

function check(){
    if(show_result === true){
        solve();
    }
    else { document.getElementById("result").value = ""; }
}
