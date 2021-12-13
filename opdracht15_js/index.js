const redWallPainter = function(){
    console.log("The wall has been painted red.")
}

redWallPainter()

const wallPainter = function(color){
    console.log("The wall has been painted " + color +".")
}
wallPainter("green")
wallPainter()

const specificWallPainter = function(Whichwall, color){
    console.log("The "+Whichwall +" wall has been painted " + color +".")
}

specificWallPainter("kitchen", "orange")



