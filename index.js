// Q no 1. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
let year = prompt("Enter the value")
if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
  console.log("This is a leap year")
}
else {
  console.log("This is a not leap year")
}


// Q no 2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let h = 5;
let l = 6;
let b = 7;
let x = (h + l + b) / 2
let area = Math.sqrt(x * (x - h) * (x - l) * (x - b))
console.log(area)

// Q no 3. Write a JavaScript program to display the current day and time in the following format.

// Q no 4. Write a JavaScript program that accept two integers and display the larger.

let m = 0;
let n = 8;
if (n > m) {
  console.log("Print the large value")
} else {
  console.log("print not large value");

}
//again
let z = prompt("Enter the value")
let y = prompt("Enter the value")
if (z < y) {
  console.log("print the large value :" + y)
}
else {
  console.log("print not large value :" + z)
}

// Q no 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


for (let j = 0; j < 15; j++) {
  if (j % 2 == 0)
    console.log(j + "even")


  else
    console.log(j + "odd")


}

// Q no 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade
let math = 75;
let Science = 80;
let Hindi = 70;
let English = 66;
let average = (Math + Science + Hindi + English) / 4
console.log("average")
if (average >= 60) {
  console.log("Grade A ")

}
else if (average >= 45)

  console.log("Grade B")




else {
  console.log(`Grade C`);
}

//  Q no 7. Write a JavaScript program to construct the following pattern, using a nested for loop.


