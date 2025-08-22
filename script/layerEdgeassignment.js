//Q1 Datatypes
let name = "Olaniran Rasheed Adeniyi";
let age = 26;
let student = false;

console.log(typeof name);
console.log(typeof age);
console.log(typeof student);

//Q2 Loops
for (let i=0; i < 50; i++){
    console.log(i * 2);
};

//Q3 Loops using while
console.log("Multiples of 5");
let x = 0;
while (x <= 60) {
    console.log(x);
    x += 5;
};

//Q4 if Else
let y = -6;
if(y > 0){
    console.log("The number is positive")
}
else if( y == 0){
    console.log("The number is neutral")
}
else{
    console.log("This is a negative number")
};

//Q5 if Else Ladder
function marks(grade){
    if(grade >= 90){
        console.log("Grade A")
    }
    else if(grade >= 75){
        console.log("Grade B")
    }
    else if (grade >= 50){
        console.log("Grade C")
    }
    else{
        console.log("Fail")
    }
}

marks(35);

//Q6  + functions
function addNumbers(a, b){
    return a + b;
};

console.log(addNumbers(9, 3));

//Q7  find max function
function findMax(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b >  c){
        return b;
    }
    else if(c > a && c > b){
        return c;
    }
    else{
        return "All are equal in value"
    }
};

console.log(findMax(10,5,9));

//Q8 Loops + If
for(i = 0; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log(i + " Fizz");
    }
    else if(i % 5 == 0){
        console.log(i + " Buzz")
    } 
};

//Q9 Functions + Loops
function checkPrime(n){
    if (n <= 1){
        console.log("Not a Prime");
        return;
    }

    for(let i=2; i <= Math.sqrt(n); i++){
        if(n % 1 == 0){
            console.log("Not a prime");
            return;
        }
    }
            console.log("Prime");
    };

console.log(checkPrime(4));

//Q10 Array + Loop
let numArray = [2, 4, 6,34 , 65];
let sum = 0;

for(i=0; i < numArray.length; i++){
    console.log(sum +=numArray[i]);
}