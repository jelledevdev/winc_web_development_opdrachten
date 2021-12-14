// let Age = 12;

// while (Age<23){
//     Age++;
//     console.log("haha mannetje je bent nu "+ Age+ " jaartjes oud");
// }


// let w = 0;
// while (w < 5) {
//   console.log(`This is while iteration number ${w}`);
//   w++;}

// for (let i = 0; i < 5; i++) {
//     console.log(`This is for iteration number ${i}`);
//   }

for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even of oneven?`);
    if (i % 2 == 0) {
        console.log(i + " is een even getal.")
    }
    else {console.log(i + " is een oneven getal.")}
  }

for (i =1; i<11; i++) {
    console.log(i + " * 9 = "+ (i*9) )
}

for (t=1; t<11; t++) {
    for (i=1; i<11; i++) {
        console.log(i + " * "+ t + "= "+ (i*t) )
    }
}

function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

for (i=60; i<=100; i++) {
    console.log("cijfer " + i + " is een grade " + assignGrade(i));
}
  

