let card = document.querySelectorAll(".card");
let fullPart = document.querySelector(".card1")
let btn = document.querySelector(".button");
let main = document.querySelector(".card1");
let form = document.querySelector(".form");


console.log("he");
let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

if (!savedTasks) {
    savedTasks = {};
}



const addTask = (e) => {
    e.preventDefault();     
    
    const currentForm = e.target; // current form element
    const value = currentForm.elements[0].value;
    const valueTextArea = currentForm.elements[1].value;
    const parent = currentForm.parentElement; // parent of form i.e div.column
    // const ticket = newElement(value);
    createCard(value,valueTextArea)
    
    
    if (!value) {
        
        return;
        
    }
    // for (const test in savedTasks) {
        //     let div = createCard(test)
        //     main.appendChild(div)
        // }
        // parent.insertBefore(ticket, parent.secondChild)
        // parent.insertBefore(ticket, parent.firstChild); // adding new task before the form
        const h3Value = "";
        
        
        currentForm.reset(); // clearing form
    };
// for (let i = 0; i < card.length; i++) {
    //     const form = card[i].children[1]; // selecting every column's form because form is last element
    
    // }
    form.addEventListener("submit", addTask);
    
    // let newElement = (value) => {
        //     let ticket = document.createElement("p");
        //     let createText = document.createTextNode(value);
        //     ticket.appendChild(createText);
        //     return ticket
// }




let createCard = (value, valueTextArea) => {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "card")
    const newHeading = document.createElement("h2");
    const headingVAlue = document.createTextNode(value)
    newHeading.appendChild(headingVAlue);
    
    const para = document.createElement("p");
    const paraValue = document.createTextNode(valueTextArea);
    para.appendChild(paraValue);
    
    newCard.appendChild(newHeading);
    newCard.appendChild(para);
    main.appendChild(newCard);
    
    
    
    const h3Value = newHeading.innerText;
    
    if (!Array.isArray(savedTasks[h3Value])) {
        savedTasks[h3Value] = [];
    }
    savedTasks[h3Value].push(valueTextArea);
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    
    
    for (let i = 0; i < savedTasks.length; i++) {
        console.log(savedTasks.Card1[i]);
    }
    savedTasks[h3Value].push(addTask);
    
} 
for (const test in savedTasks) {
    let showValue = savedTasks[test][0];
    let showHeading = test;

    createCard(showHeading, showValue);

}


// creteFunction()

// console.log(createCard());