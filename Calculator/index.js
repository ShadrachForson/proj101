function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
    }
function showDate(){
    document.getElementById("footer").innerHTML = Date("now");
}

function add()
{
    let firstTerm = parseInt(document.getElementById('term_1').value);
    let secondTerm = parseInt(document.getElementById('term_2').value); 
    document.getElementById("result").innerHTML = firstTerm + secondTerm;
    playSound();
    
}

function subtract()
{
    let firstTerm = parseInt(document.getElementById('term_1').value);
    let secondTerm = parseInt(document.getElementById('term_2').value); 
    document.getElementById("result").innerHTML = firstTerm - secondTerm;
    playSound();
}

function divide()
{
    let firstTerm = parseInt(document.getElementById('term_1').value);
    let secondTerm = parseInt(document.getElementById('term_2').value); 
    document.getElementById("result").innerHTML = firstTerm / secondTerm;
    playSound();
}


function multiply()
{
    let firstTerm = parseInt(document.getElementById('term_1').value);
    let secondTerm = parseInt(document.getElementById('term_2').value); 
    document.getElementById("result").innerHTML = firstTerm * secondTerm;
    playSound();
   
}

