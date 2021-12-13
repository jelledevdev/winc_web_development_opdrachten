const overHundred = function(number){
    if (number>100){
        return true;
    }
    else{
        return false;
    }
}

const check105 =overHundred(105)
console.log(check105)

const check3 =overHundred(3)
console.log(check3)

const bouncerBrenda = function(age, maxNumberAllowed, numberOfCustomers ){
    if (age <18){
        console.log("this is a club for adults")}
    else if (numberOfCustomers > maxNumberAllowed-1)
        {console.log("it's too busy now, come back later")}
    else {console.log("come in")}
    }


const areYouWelcome = bouncerBrenda(19,99,99)



const averagOfFiveNumbers = function(num1, num2, num3, num4, num5) {
    const sum = num1+num2+num3+num4+num5;
    const average = sum/5
    return average
}
const average = averagOfFiveNumbers(1,4,7,5,11);
console.log(Math.round(average))