const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

const student = JSON.parse(localStorage.getItem("students")) || [];
const addStudent = (name, age, roll) => {
    student.push({
        name,
        age,
        roll,
    });
    localStorage.setItem("students", JSON.stringify(student));
    return {name,age,roll}
};
const createStudentElement = ({ name, age, roll }) => {

    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = student.length === 0 ? "none" : "flex";
};
studentsContainer.style.display = student.length === 0 ? "none" : "flex";


student.forEach(createStudentElement);
studentForm.onsubmit = e => {
    e.preventDefault();

    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement(newStudent);
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
}