

for ( let n=0; n<5; n++)

{
  console.log("Whoop , in a loop for the " + n + " time!");
}

let a = 0;
while ( a < 5) {
console.log("Whoop , in a loop for the " + a + " time!");
  a++;
}


const students = ["ami", "sid", "dev", "sidda"];

for (let i = 0; i < students.length; i++) {
  console.log("hi , i am " + students[i]);
}

let j = 0;
while (j < students.length) {
console.log("hi , i am " + students[j]);
  j++;  
}

const k = 0;
students.forEach(studentName => console.log(studentName))

const yearOfBirth = 1996;
const currentYear = 2024;
const age = currentYear - yearOfBirth ;
for (let i = 2015; i < currentYear; i++ )
  {
  console.log("i was born in " + yearOfBirth + ". We are now in " + currentYear + " and I am " + age + " year old.");
}

let b = 2015
while(b< currentYear)
{
console.log("i was born in " + yearOfBirth + ". We are now in " + currentYear + " and I am " + age + " year old.");
  b++;
}