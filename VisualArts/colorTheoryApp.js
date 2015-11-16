/**
 * Created by kris on 11/16/15.
 */

var questionNumber, colorValue=['DarkOrange', 'purple', 'green', 'black'], answer, box1=['red', 'blue', 'yellow'], box2=['black', 'blue', 'yellow', 'red'], box1Color, box2Color, box1Value, box2Value;

function loadColors(n) {
    box1Value = Math.floor(Math.random() * 3);
    box2Value = (box1Value + 1);
    $('#box1').css("background-color", box1[box1Value]); box1Color=box1[box1Value];
    $('#box2').css("background-color", box2[(box2Value)]); box2Color=box2[(box2Value)];
    answer = colorValue[1];

    $('#colorValue1').css("background-color", colorValue[0]);
    $('#colorValue2').css("background-color", colorValue[1]);
    $('#colorValue3').css("background-color", colorValue[2]);
    $('#colorValue4').css("background-color", colorValue[3]);
    randomizer();
}

function checkColor(n) {
    if( box2Color==box2[0] ) {
        if ( colorValue[n] == colorValue[3] ) {
            console.log(true);
        }
    }
    if( box1Color==box1[0] && box2Color==box2[1] ) {
        if( colorValue[n] == colorValue[1] ) {
            console.log(true);
        }
    }
    if( box1Color==box1[2] && box2Color==box2[3] ) {
        if( colorValue[n] == colorValue[0] ) {
            console.log(true);
        }
    }
    if( box1Color==box1[1] && box2Color==box2[2] ) {
        if( colorValue[n] == colorValue[2] ) {
            console.log(true);
        }
    }
}

function randomizer() {
    if (box1Value < 2) {
        box1Value++;
    }
    else if (box1Value == 2) {
        box1Value = 0;
    }
    if (box2Value < 2) {
        box2Value += 2;
    }
    else if (box2Value >= 2){
        box2Value -= 2;
    }
}


