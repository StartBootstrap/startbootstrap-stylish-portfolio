/**
 * Created by zacharyhuffman on 11/16/15.
 */
var current = 0;
var answers = "acdbabdabcc".split("");
var response = [];
var finished = [];
var wrong = [];
var allRight = true;
var questions = {q1: {description: "The main body of an aircraft.", pic: "images/fuselage.jpg", id: 1, answer: "Fuselage", a: "Fuselage", b: "Wheel", c: "Wing", d: "Cockpit"},
    q2: {description: "A rigid horizontal structure that projects from both sides of an aircraft and supports it in the air.", pic: "images/wing.jpg", id: 2, answer: "Wings", a: "Cabin", b: "Window", c: "Wings", d: "Tail"},
    q3: {description: "A machine with moving parts that converts power into motion.", pic: "images/engine.jpg", id: 3, answer: "Engine", a: "Wheel", b: "Fuselage", c: "Elevator", d: "Engine"},
    q4: {description: "A horizontal airfoil at the tail of an aircraft.", pic: "images/horizontal_stabilizer.JPG", id: 4, answer: "Horizontal Stabilizer", a: "Tail", b: "Horizontal Stabilizer", c: "Vertical Stabilizer", d: "Wings"},
    q5: {description: "A small, flattened projecting surface or attachment on an aircraft or rocket for providing aerodynamic stability.", pic: "images/vertical_stabilizer.jpg", id: 5, answer: "Vertical Stabilizer", a: "Vertical Stabilizer", b: "Cabin", c: "Aileron", d: "Elevator"},
    q6: {description: "A hinged surface in the trailing edge of an airplane wing, used to control lateral balance.", pic: "images/aileron.jpg", id: 6, answer: "Aileron", a: "Horizontal Stabilizer", b: "Aileron", c: "Pilot", d: "Wheels"},
    q7: {description: "Flight control surfaces, usually at the rear of an aircraft, which control the aircraft's pitch, and therefore the angle of attack and the lift of the wing.", pic: "images/elevator.JPG", id: 7, answer: "Aileron", a: "Aileron", b: "Fuselage", c: "Window", d: "Elevator"},
    q8: {description: "A compartment for the pilot and sometimes also the crew in an aircraft or spacecraft.", pic: "images/cockpit.jpg", id: 8, answer: "Cockpit", a: "Cockpit", b: "Vertical Stabilizer", c: "Window", d: "Horizontal Stabilizer"},
    q9: {description: "Rotation about an axis running from nose to tail", pic: "images/roll.gif", id: 9, answer: "Roll", a: "Yaw", b: "Roll", c: "Pitch", d: "None of the above"},
    q10: {description: "Nose up or down about an axis running from wing to wing", pic: "images/pitch.gif", id: 10, answer: "Pitch", a: "Engine", b: "Stall", c: "Pitch", d: "Yaw"},
    q11: {description: "Nose left or right about an axis running up and down", pic: "images/yaw.gif", id: 11, answer: "Yaw", a: "Pitch", b: "Fuselage", c: "Yaw", d: "Cabin"}};
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
    var num = document.getElementById("index");
    var help = document.getElementById("help");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    for (var i = 0; i < selected.length; i++){
        if (i == current && current <= (selected.length - 1)){
            pic.innerHTML = "<img class='picture col-md-12' src='" + questions[selected[i]].pic + "'>";
            a.innerHTML = "A.  " + questions[selected[i]].a;
            b.innerHTML = "B.  " + questions[selected[i]].b;
            c.innerHTML = "C.  " + questions[selected[i]].c;
            d.innerHTML = "D.  " + questions[selected[i]].d;
            num.innerHTML = "Question " + (current + 1) + " out of " + selected.length;
        }
    }
    if (current > (selected.length - 1)){
        pic.innerHTML = "<img class='picture col-md-12' src='images/airplane.jpg'>";
        a.innerHTML = "A.";
        b.innerHTML = "B.";
        c.innerHTML = "C.";
        d.innerHTML = "D.";
        for (var i = 0; i < answers.length; i++){
            if (answers[i] !== response[i]){
                allRight = false;
                wrong.push(i + 1);
            }
        }
        if (allRight == true){
            window.alert("All answers are right!");
        }
        if (allRight == false){
            window.alert("Your answer for question(s): " + wrong.join(", ") + " were not correct");
        }
    }
    help.innerHTML = "";
    current++;
}
function storeQues(){
    sessionStorage.setItem("selected", selected);
}
function loadItems(){
    var x = 0;
    current = 0;
    selected = [];
    for (x in questions){
        selected.push(x);
    }
    wrong = [];
    response = [];
    nextQues();
}

function answer(x){
    response.push(x);
}

function giveHelp(){
    var help = document.getElementById("help");
    for (var i = 0; i < selected.length; i++){
        if (i == current && current <= (selected.length - 1)){
            help.innerHTML = questions[selected[i - 1]].description;
        }
    }
}
