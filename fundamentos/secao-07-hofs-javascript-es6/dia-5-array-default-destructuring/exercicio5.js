const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [ student1, student2, student3, student4, student5 ] = moreStudents.flat();

console.log(student1, student2, student3, student4, student5);
