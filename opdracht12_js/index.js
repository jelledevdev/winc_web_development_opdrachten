const age = 24;
const firstName = "sarah"
const totalAmount =66

if (age > 17){
    document.write("kom binnen!  ")
}
else{
    document.write("Sorry maar jij bent nog te jong om hier naar binnen te gaan.  ")
}
document.write("<br>")
const isFemale = true

if (isFemale){
    document.write(" je mag een ticket kopen, want je bent een vrouw.  ")
}
else {document.write("sorry, maar je bent geen man, dus toedeledokie!  ")}
document.write("<br>")
const driverStatus = "bob"

if (driverStatus == "bob") {
    document.write("je mag naar huis rijden.  ")
}
else {
    document.write("je bent dronken. Hier met die autosleutels.  ")
    
}
document.write("<br>")
if (age>17 && age <26){
    document.write("je krijgt korting!  ")

}
else {document.write("helaas, geen korting!")}

document.write("<br>")
if (firstName == "sarah" || firstName == "Abraham"){
    document.write("you get free beer, "+ firstName)
}
else {document.write("you get no free drinks")}

document.write("<br>")

if (totalAmount > 100){
    document.write("je krijgt een gratis fles champagne!")
}
else if (totalAmount > 50){
    document.write("je krijgt een gratis portie nachos")
}
else if (totalAmount > 25){
    document.write("je krijgt een gratis portie bitterballen!")}
else {document.write("Als je nou meer uitgeeft,  kun je een bonus verdienen! ")}