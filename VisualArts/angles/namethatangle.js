var numRight = 0;

var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

function Answer() {
    var input1 = document.getElementById("input1").value;
    var input2= document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var input5 = document.getElementById("input5").value;
    var input6 = document.getElementById("input6").value;

    //var inputBox = document.getElementById("input" + n).value;
    //if (n == 1 || n == 6) {
    //    if (inputBox == "right") {
    //        numRight ++;
    //    }
    //    else {
    //        numWrong ++;
    //    }
    //}
    //var inputBox = document.getElementById("input" + n).value;
    //if (n == 2 || n == 4) {
    //    if (inputBox == "acute") {
    //        numRight ++;
    //    }
    //    else {
    //        numWrong ++;
    //    }
    //}
    //var inputBox = document.getElementById("input" + n).value;
    //if (n == 3 || n == 5) {
    //    if (inputBox == "obtuse") {
    //        numRight ++;
    //    }
    //    else {
    //        numWrong ++;
    //    }
    //}

    if (input1 === "right") {
        a1 = 1;
    } else {
        a1 = 0;
    }
    if (input2 === "acute") {
        a2 = 1;
    } else {
        a2 = 0;
    }
    if (input3 === "obtuse") {
        a3 = 1;
    } else {
        a3 = 0;
    }
    if (input4 === "acute") {
        a4 = 1;
    } else {
        a4 = 0;
    }
    if (input5 === "obtuse") {
        a5 = 1;
    } else {
        a5 = 0;
    }
    if (input6 === "right") {
        a6 = 1;
    } else {
        a6 = 0;
    }
    numRight = (a1+a2+a3+a4+a5+a6);
    document.getElementById("feedback").innerHTML = "right: " + numRight + "/ 6";

    if (numRight == 6) {
        $('#feedback').css('background-color', '#4EED5A');
    }
    if (numRight < 6) {
        $('#feedback').css('background-color', 'whitesmoke');
    }
}
window.setInterval(Answer(), 100);