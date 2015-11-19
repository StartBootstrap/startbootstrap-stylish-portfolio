var questionNumber, colorValue = ['DarkOrange', 'purple', 'green', 'black'], box1 = ['red', 'blue', 'yellow'], box2 = ['black', 'blue', 'yellow', 'red'], box1Color, box2Color, answer, box1Value, box2Value;

function setRandom() {
    box1Value = Math.floor(Math.random() * 3);
    box2Value = box1Value + 1;
    loadColors();
}

function loadColors() {
    $('#box1').css("background-color", box1[box1Value]);
    box1Color = box1[box1Value];
    $('#box2').css("background-color", box2[box2Value]);
    box2Color = box2[box2Value];


    $('#colorValue1').css("background-color", colorValue[0]);
    $('#colorValue2').css("background-color", colorValue[1]);
    $('#colorValue3').css("background-color", colorValue[2]);
    $('#colorValue4').css("background-color", colorValue[3]);
    randomizer();
}

function checkColor(n) {
    // if box2=BLACK then n should be black
    if (box2Color == box2[0]) {
        if (colorValue[n] == colorValue[3]) {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Correct!" + "</span>";
            $('#answerModal').modal('show');
            answer = true;

        }
        else {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Sorry, wrong answer. Try again!" + "</span>";
            $('#answerModal').modal('show');
            answer = false;
        }
    }
    // if box1=RED & box2=BLUE then n should be purple
    if (box1Color == box1[0] && box2Color == box2[1] || box1Color == box1[1] && box2Color == box2[3]) {
        if (colorValue[n] == colorValue[1]) {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Correct!" + "</span>";
            $('#answerModal').modal('show');
            answer = true;
        }
        else {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Sorry, wrong answer. Try again!" + "</span>";
            $('#answerModal').modal('show');
            answer = false;
        }
    }
    // if box1=YELLOW & box2=RED then n should be orange
    if (box1Color == box1[2] && box2Color == box2[3] || box1Color == box1[0] && box2Color == box2[2]) {
        if (colorValue[n] == colorValue[0]) {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Correct!" + "</span>";
            $('#answerModal').modal('show');
            answer = true;
        }
        else {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Sorry, wrong answer. Try again!" + "</span>";
            $('#answerModal').modal('show');
            answer = false;
        }
    }
    // if box1=BLUE & box2=YELLOW then n should be green
    if (box1Color == box1[1] && box2Color == box2[2] || box1Color == box1[2] && box2Color == box2[1]) {
        if (colorValue[n] == colorValue[2]) {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Correct!" + "</span>";
            $('#answerModal').modal('show');
            answer = true;
        }
        else {
            document.getElementById("answerModal").innerHTML = "<span class='rtxt'>" + "Sorry, wrong answer. Try again!" + "</span>";
            $('#answerModal').modal('show');
            answer = false;
        }
    }
    if (answer == true) {
        loadColors()
    }
}

function randomizer() {
    if (box1Value < 2) {
        box1Value++;
    }
    else if (box1Value == 2) {
        box1Value = 0;
    }
    if (box2Value == 0) {
        box2Value = 3;
    }
    else if (box2Value > 0) {
        box2Value -= 1;
    }
    if (box1Value == 0 && box2Value == 3 || box1Value == 1 && box2Value == 1 || box1Value == 2 && box2Value == 2) {
        setRandom();
    }
}