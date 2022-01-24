function moveRight() {
    var direction = document.getElementById('right');
    var movePX = document.getElementById('mov').value;
    console.log(direction,movePX);
    var id = setInterval(animate, 1000);
}

function moveLeft() {
    var direction = document.getElementById('left');
    var movePX = document.getElementById('mov').value;
    console.log(direction,movePX);
}

function moveDown() {
    var direction = document.getElementById('bottom');
    var movePX = document.getElementById('mov').value;
    console.log(direction,movePX);
}

function moveUp() {
    var direction = document.getElementById('top');
    var movePX = document.getElementById('mov').value;
    console.log(direction,movePX);
}

function animate() {
    
}