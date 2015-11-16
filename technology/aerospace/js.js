/**
 * Created by zacharyhuffman on 11/16/15.
 */
var current = 0;
var answers = "acdbabdab";
var response = "";
var finished = [];
var questions = {q1: {description: "Fuselage", pic: "images/fuselage.jpg", id: 1, answer: "Fuselage", a: "Fuselage", b: "Wheel", c: "Wing", d: "Cockpit"},
    q2: {description: "Wings", pic: "images/wing.jpg", id: 2, answer: "Wings", a: "Cabin", b: "Window", c: "Wings", d: "Tail"},
    q3: {description: "Engine", pic: "images/engine.jpg", id: 3, answer: "Engine", a: "Wheel", b: "Fuselage", c: "Elevator", d: "Engine"},
    q4: {description: "Horizontal Stabilizer", pic: "images/horizontal_stabilizer.JPG", id: 4, answer: "Horizontal Stabilizer", a: "Tail", b: "Horizontal Stabilizer", c: "Vertical Stabilizer", d: "Wings"},
    q5: {description: "Vertical Stabilizer", pic: "images/vertical_stabilizer.jpg", id: 5, answer: "Vertical Stabilizer", a: "Vertical Stabilizer", b: "Cabin", c: "Aileron", d: "Elevator"},
    q6: {description: "Aileron", pic: "images/aileron.jpg", id: 6, answer: "Aileron", a: "Horizontal Stabilizer", b: "Aileron", c: "Pilot", d: "Wheels"},
    q7: {description: "Elevator", pic: "images/elevator.JPG", id: 7, answer: "Aileron", a: "Aileron", b: "Fuselage", c: "Window", d: "Elevator"},
    q8: {description: "Cockpit", pic: "images/cockpit.jpg", id: 8, answer: "Cockpit", a: "Cockpit", b: "Vertical Stabilizer", c: "Window", d: "Horizontal Stabilizer"},
    q9: {description: "Roll", pic: "images/roll.gif", id: 9, answer: "Roll", a: "Yaw", b: "Roll", c: "Pitch", d: "None of the above"}};
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
        if (i == current && current <= (selected.length - 1)){
            pic.innerHTML = "<img class='picture' src='" + questions[selected[i]].pic + "'>";
            a.innerHTML = "A.  " + questions[selected[i]].a;
            b.innerHTML = "B.  " + questions[selected[i]].b;
            c.innerHTML = "C.  " + questions[selected[i]].c;
            d.innerHTML = "D.  " + questions[selected[i]].d;
        }
    }
    if (current > (selected.length - 1)){
        pic.innerHTML = "";
        a.innerHTML = "";
        b.innerHTML = "";
        c.innerHTML = "";
        d.innerHTML = "";
        if (answers == response){
            window.alert("All answers are right!");
        }
        if (answers !== response){
            window.alert("Some were answered wrong!");
        }
    }
    current++;
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

