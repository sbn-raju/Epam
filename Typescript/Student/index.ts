// Define the Student interface
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

// Initialize an empty array to hold students
let students: Student[] = [];

// CREATE: Add a new student
function addStudent(student: Student): void {
  students.push(student);
  console.log(`Student with ID ${student.id} added.`);
}

// READ: Get all students
function getAllStudents(): Student[] {
  return students;
}

// READ: Get a student by ID
function getStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

// UPDATE: Update a student by ID
function updateStudent(id: number, updatedData: Partial<Student>): void {
  const student = students.find((student) => student.id === id);
  if (student) {
    Object.assign(student, updatedData);
    console.log(`Student with ID ${id} updated.`);
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// DELETE: Remove a student by ID
function deleteStudent(id: number): void {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(`Student with ID ${id} deleted.`);
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// Example Usage
addStudent({ id: 1, name: "Alice", age: 20, course: "Mathematics" });
addStudent({ id: 2, name: "Bob", age: 22, course: "Physics" });

console.log("All students:", getAllStudents());

console.log("Student with ID 1:", getStudentById(1));

updateStudent(1, { age: 21, course: "Computer Science" });

deleteStudent(2);

console.log("Final list of students:", getAllStudents());
