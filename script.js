const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const city = document.getElementById('city');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const interest = document.getElementById('interest');
const form = document.getElementById('form');

const table = document.getElementById('table');

form.addEventListener('submit', formSubmit);
table.addEventListener('click', deleteRow);

function formSubmit(e){
    e.preventDefault();
    table.innerHTML += `
    <tr>
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${email.value}</td>
        <td>${city.value}</td>
        <td>${dob.value}</td>
        <td>${gender.value}</td>
        <td>${interest.value}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;

    form.reset();
}

function deleteRow(e){
    if(e.target.classList.contains('deleteBtn')){
        var row = e.target.parentElement.parentElement;
        row.remove();
}
}
