/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: "Kai", lastName: "Lyons" },
  { firstName: "Belle", lastName: "Norton" },
  { firstName: "Finnley", lastName: "Rennie" },
  { firstName: "Tatiana", lastName: "Dickerson" },
  { firstName: "Peyton", lastName: "Gardner" },
];
const groups = 3;

function result(students, groups) {
  // your code here
  students.sort((a, b) => a.firstName.localeCompare(b.firstName));
  const sudingroup = Math.ceil(students.length / groups);

  let newarr = [];
  for (let index2 = 0; index2 < groups; index2++) {
    const stud = students.splice(0, sudingroup);
    newarr.push(stud);
  }

  return newarr;
}

console.log(result(students, groups));
