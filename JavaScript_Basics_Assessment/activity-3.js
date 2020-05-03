//  JavaScript Arrays and Loops:

// Start off by creating an array with three student names.
const students = ['Jessica', 'Amy', 'Kevin'];

// Create a loop that will prompt the user for three more names.
for (let i = 0; i < 3; i++) {
  const student = prompt(
    `Please enter three more names, currently at ${i + 1}:`
  );

  // After every user input, store the new name into the array.
  students.push(student);
}

// Create a new loop that will iterate through the array and console log each element of the array.
for (let name of students) {
  console.log(name);
}
