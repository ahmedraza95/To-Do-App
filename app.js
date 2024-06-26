let card = document.querySelectorAll(".card");


let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

if (!savedTasks) {
    savedTasks = {};
}


const addTask = (e) => {
    e.preventDefault();

    const currentForm = e.target; // current form element
    const value = currentForm.elements[0].value; // value written in form's input
    const parent = currentForm.parentElement; // parent of form i.e div.column
    const ticket = newElement(value);
    parent.insertBefore(ticket, parent.secondChild)
    // parent.insertBefore(ticket, parent.firstChild); // adding new task before the form
    const h3Value = parent.children[0].innerText;


    currentForm.reset(); // clearing form

    if (!Array.isArray(savedTasks[h3Value])) {
        savedTasks[h3Value] = [];
    }
    savedTasks[h3Value].push(value);
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));


    // console.log(savedTasks.Card1[1]);

for (let i = 0; i < savedTasks.length; i++) {
        console.log(savedTasks.Card1[i]);
}
};
for (let i = 0; i < card.length; i++) {
    const form = card[i].children[1]; // selecting every column's form because form is last element

    form.addEventListener("submit", addTask);
}

let newElement = (value) => {
    let ticket = document.createElement("p");
    let createText = document.createTextNode(value);
    ticket.appendChild(createText);
    return ticket
}
