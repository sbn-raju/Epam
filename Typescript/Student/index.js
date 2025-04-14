// Initialize an empty array to hold students
var students = [];
// CREATE: Add a new student
function addStudent(student) {
    students.push(student);
    console.log("Student with ID ".concat(student.id, " added."));
}
// READ: Get all students
function getAllStudents() {
    return students;
}
// READ: Get a student by ID
function getStudentById(id) {
    return students.find(function (student) { return student.id === id; });
}
// UPDATE: Update a student by ID
function updateStudent(id, updatedData) {
    var student = students.find(function (student) { return student.id === id; });
    if (student) {
        Object.assign(student, updatedData);
        console.log("Student with ID ".concat(id, " updated."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
    }
}
// DELETE: Remove a student by ID
function deleteStudent(id) {
    var index = students.findIndex(function (student) { return student.id === id; });
    if (index !== -1) {
        students.splice(index, 1);
        console.log("Student with ID ".concat(id, " deleted."));
    }
    else {
        console.log("Student with ID ".concat(id, " not found."));
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
