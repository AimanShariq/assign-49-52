// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Get form data
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Display form data
//     const resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = `<h3>Form Data</h3>
//                            <p><strong>Username:</strong> ${username}</p>
//                            <p><strong>Email:</strong> ${email}</p>
//                            <p><strong>Password:</strong> ${password}</p>`;
// });





// function toggleReadMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }


document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
});

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updateStudent();
});

let selectedRow = null;

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = grade;
    newRow.insertCell(3).innerHTML = `<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>`;

    document.getElementById('studentForm').reset();
}

function editStudent(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('editName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('editAge').value = selectedRow.cells[1].innerHTML;
    document.getElementById('editGrade').value = selectedRow.cells[2].innerHTML;
    document.getElementById('editForm').classList.remove('hidden');
}

function updateStudent() {
    selectedRow.cells[0].innerHTML = document.getElementById('editName').value;
    selectedRow.cells[1].innerHTML = document.getElementById('editAge').value;
    selectedRow.cells[2].innerHTML = document.getElementById('editGrade').value;
    document.getElementById('editForm').classList.add('hidden');
    document.getElementById('editForm').reset();
}

function deleteStudent(td) {
    if (confirm('Are you sure you want to delete this student?')) {
        const row = td.parentElement.parentElement;
        document.getElementById('studentTable').deleteRow(row.rowIndex);
    }
}
