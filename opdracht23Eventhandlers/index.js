const button = document.getElementById("mybutton");
const buttonColorChange = document.getElementById("button2");
const body = document.getElementsByTagName('body')[0];
body.classList.add("blue-background")
button.addEventListener('click', function(e) {alert("The button has been clicked")})

buttonColorChange.addEventListener('click', colorToggler);

// function colorChanger(e){
//     body.classList.add("red-background")
//     }


function colorToggler(e){
    body.classList.toggle("red-background")
    }



