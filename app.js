let card = document.querySelectorAll(".card");
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

    const currentForm = e.target;
    const value = currentForm.elements[0].value;
    const parent = currentForm.parentElment;

    createCard(value)




    currentForm.reset(); // clearing form
};

form.addEventListener("submit", addTask);





let createTicket = (e) => {
    e.preventDefault();
    let targetDiv = e.target.parentElement.parentElement;
    let targetinput = e.target.parentElement.children[0];
    let newPara = document.createElement("p")
    newPara.textContent = targetinput.value;
    console.log(targetinput.value);

    let inputval = targetinput.value;
    targetDiv.appendChild(newPara);
    let getForm = targetinput.parentElement;
    getForm.reset();
    let getValueHeading = targetDiv.children[0].children[0].children[0];

    
    getValueHeading = getValueHeading.innerText;

    savedTasks[getValueHeading].push(inputval);
    console.log(targetinput);
    localStorage.setItem("savedTasks" , JSON.stringify(savedTasks));
    

    return getValueHeading;
}

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
        savedTasks[h3Value].push();
    }
    // console.log(createPara());

    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));


    submitBtn.addEventListener("click", createTicket);


    deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let news = e.target;
        let targetDiv = news.parentElement.parentElement.parentElement.parentElement;
        console.log(targetDiv);
        targetDiv.remove();
        console.log(savedTasks["dsdsd"]);
        localStorage.removeItem(`savedTasks["dsdsd"]`);

    })




    // edit div value function
    // edit div value function 
    // edit div value function

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

        let updted1 = document.createElement("input");

        removeEle.remove();
    })
}
for (const test in savedTasks) {
    let showValue = savedTasks[test][0];
    let showHeading = test;

    createCard(showHeading, showValue);

}

for (const keyys of savedTasks[getValueHeading]){
    createTicket();
    console.log(keyys);
}

console.log(createTicket());
