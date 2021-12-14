

const naam = prompt("Welkom op deze pagina. Hoe heet je?: ")
document.write("<h2>Hoi ", naam,", wat leuk dat je komt raden!</h2>")

const onderwaarde = prompt("Geef je voorkeur op: Je wilt een getal raden boven de:")
const bovenwaarde = prompt("Geef je voorkeur op: Je wilt een getal raden onder de:")


document.write("<br><h3>Je moet een getal raden tussen de ", onderwaarde, " en de ", bovenwaarde,", heb je dat gesnopen? </h3>")
const randomNumber = (Math.random() * (bovenwaarde-onderwaarde))

const afgerond = (Math.floor(randomNumber)+ parseInt(onderwaarde));
// document.write("<br> ", afgerond)

let guess = "koekie"
let numberOfAttempts = 0
document.write('<div class="container">')
while (guess != afgerond){
  
    numberOfAttempts = (numberOfAttempts + 1);
    // document.write("beurt no. ", numberOfAttempts, "<br>")
    if (numberOfAttempts>5){
        document.write("<br>Dat was de 5e beurt. Het spel is over!<br>")
        guess = afgerond
    }
    else{

    let guess = prompt("Raad een getal tussen de "+ onderwaarde+ " en "+ bovenwaarde+".");
    // document.write("guess: ",guess, " en afgerond: ", afgerond, "<br>");
    // document.write((guess != afgerond), " <br>")
    if (guess==afgerond){
        document.write("<br>Je hebt het goed. Het getal dat ik zocht was inderdaad ",afgerond, "!<br>");
        break
    }
    else {document.write("Tja, '",guess,"' is een fout antwoord helaas!<br>Je hebt nog ",(5-numberOfAttempts)," raadbeurten, ", naam,"!<br><br>")}
}

}           
document.write("</div>")
document.write("<h3>Om dit suffe spel nog eens te spelen moet je de pagina opnieuw laden, beetje jammer, he!")