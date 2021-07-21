//inputBox turns red when space key is pressed
function spaceKey(x) {
    if (x.key == ' ') {
        document.getElementById("keyPressMe").style.backgroundColor = "red"; 
    }
}
document.getElementById('keyPressMe').addEventListener('keypress', spaceKey);
//Hover over red circle to change width of circle
function hoverOver() {
    funCircle.style.width = "500px";
}
var funCircle = document.getElementById('circle');
funCircle.addEventListener('mouseover', hoverOver);
//Square rotates when clicked
function clickOnSquare() {
    funSquare.style.transform = "rotate(25deg)";
}

var funSquare = document.getElementById('square');
funSquare.addEventListener('click', clickOnSquare);

