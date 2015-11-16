/**
 * Created by zacharyhuffman on 11/16/15.
 */
var current = 0;
var answers = "acdba";
var response = "";
var finished = [];
var questions = {q1: {description: "Fuselage", pic: "images/fuselage.jpg", id: 1, answer: "Fuselage", a: "Fuselage", b: "Wheel", c: "Wing", d: "Cockpit"},
    q2: {description: "Wings", pic: "images/wing.jpg", id: 2, answer: "Wings", a: "Cabin", b: "Window", c: "Wings", d: "Tail"},
    q3: {description: "Engine", pic: "images/engine.jpg", id: 3, answer: "Engine", a: "Wheel", b: "Fuselage", c: "Elevator", d: "Engine"},
    q4: {description: "Horizontal Stabilizer", pic: "images/horizontal_stabilizer.JPG", id: 4, answer: "Horizontal Stabilizer", a: "Tail", b: "Horizontal Stabilizer", c: "Vertical Stabilizer", d: "Wings"},
    q5: {description: "Vertical Stabilizer", pic: "images/vertical_stabilizer.jpg", id: 5, answer: "Vertical Stabilizer", a: "Vertical Stabilizer", b: "Cabin", c: "Aileron", d: "Elevator"}};
var selected = [];

function prepareTest(y){
    var x = 0;
    for (x in questions){
        if (x == "q" + y){
            selected.push(x);
        }
    }
    storeQues();
}

function nextQues(){
    var out = document.getElementById("output");
    var pic = document.getElementById("picture");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var x = 0;
    for (var i = 0; i < selected.length; i++){
        if (i == current && current <= 4){
            pic.innerHTML = "<img class='picture' src='" + questions[selected[i]].pic + "'>";
            a.innerHTML = questions[selected[i]].a;
            b.innerHTML = questions[selected[i]].b;
            c.innerHTML = questions[selected[i]].c;
            d.innerHTML = questions[selected[i]].d;
        }
    }
    current++;
    if (current > 4){
        pic.innerHTML = "";
        a.innerHTML = "";
        b.innerHTML = "";
        c.innerHTML = "";
        d.innerHTML = "";
        if (answers == response){
            window.alert()
        }
    }
}
function storeQues(){
    sessionStorage.setItem("selected", selected);
}
function loadItems(){
    var x = 0;
    for (x in questions){
        selected.push(x);
    }
}

function answer(x){
    response += x;
}

