const colors = ["blue", "green", "yellow", "red", "orange"]

index =0

console.log("       while loop:")
while (index < (colors.length-1)) {
    index ++;
    console.log(colors[index])
}
console.log("       for loop:")
for (i=0; i<colors.length; i++){
    console.log(colors[i])
}

console.log("       foreach method:")

colors.forEach(color=> {
    console.log(color)
})
