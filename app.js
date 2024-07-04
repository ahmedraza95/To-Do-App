let card = document.querySelectorAll(".card");
let btn = document.querySelector(".button");
let main = document.querySelector(".add");
let form = document.querySelector(".form");
let selectedElementCursor = null;


console.log("he");
let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));

if (!savedTasks) {
    savedTasks = {};
}


const addTask = (e) => {
    e.preventDefault();

    const currentForm = e.target;
    const value = currentForm.elements[0].value;
    const parent = currentForm.parentElment;

    createCard(value)




    currentForm.reset(); // clearing form
};

form.addEventListener("submit", addTask);





let createTicket = (valuee) => {
    let newPara = document.createElement("p")
    newPara.setAttribute("class", "para")
    newPara.setAttribute("draggable" , "true")
    newPara.textContent = valuee;

    newPara.addEventListener("mousedown", (event) => {
        selectedElementCursor = event.target;
        console.log(selectedElementCursor);
    });



    return newPara;

};


let createCard = (value) => {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "card")


    let optionDiv = document.createElement("div");
    optionDiv.setAttribute("class", "Option");

    let newDiv1 = document.createElement("div");
    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "optionUpadte")

    let UpdateDiv = document.createElement("button");
    UpdateDiv.setAttribute("class", "btnEdit");

    let editImg = document.createElement("img");
    editImg.setAttribute("src", "./images/edit img.png");
    editImg.setAttribute("width", "80%")
    UpdateDiv.appendChild(editImg);


    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "btnEdit")
    deleteBtn.setAttribute("id", "Btn10")
    let createImg = document.createElement("img");
    createImg.setAttribute("src", "./images/delete icon.png");
    createImg.setAttribute("width", "60%")
    deleteBtn.appendChild(createImg);


    const newHeading = document.createElement("h2");
    const headingVAlue = document.createTextNode(value)
    newHeading.appendChild(headingVAlue);
    newDiv1.appendChild(newHeading);



    newDiv2.appendChild(UpdateDiv)
    newDiv2.appendChild(deleteBtn)

    optionDiv.appendChild(newDiv1);
    optionDiv.appendChild(newDiv2);
    newCard.appendChild(optionDiv)



    let form = document.createElement("form");
    form.setAttribute("class", "innerForm")
    let input = document.createElement("input");
    input.setAttribute("placeholder", "Add List")
    input.setAttribute("type", "text");
    input.setAttribute("class", "innerDiv");
    form.appendChild(input);
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "button12")
    let btnValue = document.createTextNode("Add Task");
    submitBtn.appendChild(btnValue);

    form.appendChild(submitBtn);



    newCard.appendChild(form);
    main.appendChild(newCard);

    const h3Value = newHeading.innerText;




    if (!Array.isArray(savedTasks[h3Value])) {
        savedTasks[h3Value] = [];
        // savedTasks[h3Value].push();
    }

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));


    newCard.addEventListener("dragleave", (event) => event.preventDefault());
    newCard.addEventListener("dragover", (event) => event.preventDefault());



    newCard.addEventListener("drop", (event) => {
        const targetDropDiv = event.target;
        console.log(targetDropDiv);

        if (targetDropDiv.className.includes("card")) {
            // console.log("2");
            targetDropDiv.appendChild(selectedElementCursor);
        }

        if (targetDropDiv.className.includes("para")) {
            targetDropDiv.parentElement.appendChild(
                selectedElementCursor
            );
        }
    });
    // drag drop 



    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let targetDiv = e.target.parentElement.parentElement;
        let targetinput = e.target.parentElement.children[0];

        let inputval = targetinput.value;
        let getForm = targetinput.parentElement;
        
        getForm.reset();
        let getValueHeading = targetDiv.children[0].children[0].children[0];
        
        
        let createt = createTicket(inputval);
        targetDiv.appendChild(createt)
        

        getValueHeading = getValueHeading.innerText;

        savedTasks[getValueHeading].push(inputval);
        localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
    });


    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let news = e.target;
        let targetDiv = news.parentElement.parentElement.parentElement.parentElement;
        console.log(targetDiv);
        targetDiv.remove();
        console.log(savedTasks["dsdsd"]);
        localStorage.removeItem(`savedTasks["dsdsd"]`);

    })




    UpdateDiv.addEventListener("click", (e) => {
        e.preventDefault();

        let getValue = e.target.parentElement.parentElement.parentElement.children[0];
        let removeEle = e.target.parentElement.parentElement.parentElement.children[1];

        let textAreaValue = e.target.parentElement.parentElement.parentElement.parentElement.children[1];
        let addValue = e.target.parentElement.parentElement.parentElement.parentElement;



        let targetChildren = getValue.children[0];
        targetChildren.remove();

        let form = document.createElement("form");
        let updateInput = document.createElement("input");
        updateInput.setAttribute("class", "styling")
        updateInput.setAttribute("type", "text")
        updateInput.setAttribute("value", `${targetChildren.innerText}`);
        form.appendChild(updateInput);


        let UpdateTextArea = document.createElement("textarea");
        let createValueTextArea = document.createTextNode(textAreaValue.innerText)
        UpdateTextArea.appendChild(createValueTextArea);

        form.appendChild(UpdateTextArea);

        let submitBtn = document.createElement("button");
        let buttonValue = document.createTextNode("Update Note");
        submitBtn.setAttribute("class", "button1")
        let br = document.createElement("br");

        form.appendChild(br)
        submitBtn.setAttribute("type", "submit");
        submitBtn.appendChild(buttonValue);

        form.appendChild(submitBtn);
        textAreaValue.remove();
        getValue.appendChild(form)

        removeEle.remove();
    })
    return newCard

}

for (const test in savedTasks) {
    let showValue = savedTasks[test];
    let showHeading = test;
    let card =  createCard(test);

    for(const done of savedTasks[showHeading]){
        let loging  = createTicket(done); 
        card.appendChild(loging);

        

    }

}
