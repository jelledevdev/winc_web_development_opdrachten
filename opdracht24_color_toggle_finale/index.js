const hamburgerbutton = document.getElementById('hamburger-button');
const imagehamburgerbutton = document.getElementById('image-hb-menu');

const btnYellow = document.getElementById('btn-yellow');
const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');
const btnHome = document.getElementById('btn-home');
const body = document.getElementsByTagName("body")[0];
const container = document.getElementsByClassName("container")[0];
const realBurger = document.getElementById("real-burger");
const text = document.getElementsByClassName("text")[0];


realBurger.addEventListener('mouseover', function (e) {
    
    imagehamburgerbutton.classList.add('emph')
    text.classList.toggle('text')

})

container.classList.add('visible')

hamburgerbutton.addEventListener('click', function (e) {
    container.classList.toggle('visible')
    text.classList.add('text')

})
btnHome.addEventListener('click', function (e) {
    body.classList.add('home')
    body.classList.remove('red', "blue", "green", "yellow");
    container.classList.toggle('visible')
    
})
body.addEventListener('keydown', function (e) {
    if (e.key == 'h') {
        body.classList.add('home')
        body.classList.remove('red', "blue", "green", "yellow");
    }
    else if (e.key == 'y') {
        body.classList.add('yellow')
        body.classList.remove('red', "blue", "green", "home");
    }
    else if (e.key == 'r') {
        body.classList.add('red')
        body.classList.remove('yellow', "blue", "green", "home");
    }
    else if (e.key == 'g') {
        body.classList.add('green')
        body.classList.remove('red', "blue", "yellow", "home");
    }
    else if (e.key == 'b') {
        body.classList.add('blue')
        body.classList.remove('red', "yellow", "green", "home");
    }

    // container.classList.toggle('visible')
})



btnYellow.addEventListener('click', function (e) {
    body.classList.add('yellow')
    body.classList.remove('red', "blue", "green", "home");
    container.classList.toggle('visible')
})
btnRed.addEventListener('click', function (e) {
    body.classList.toggle('red')
    body.classList.remove("blue", "green", "yellow", "home");
    container.classList.toggle('visible')
})
btnGreen.addEventListener('click', function (e) {
    body.classList.toggle('green')
    body.classList.remove('red', "blue", "yellow", "home");
    container.classList.toggle('visible')
})
btnBlue.addEventListener('click', function (e) {
    body.classList.toggle('blue')
    body.classList.remove('red', "green", "yellow", "home")
    container.classList.toggle('visible')
})

