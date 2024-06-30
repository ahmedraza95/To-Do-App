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
    const valueTextArea = currentForm.elements[1].value;
    const parent = currentForm.parentElment;

    createCard(value, valueTextArea)




    currentForm.reset(); // clearing form
};

form.addEventListener("submit", addTask);





let createCard = (value, valueTextArea) => {
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
    


    const para = document.createElement("p");
    const paraValue = document.createTextNode(valueTextArea);
    para.appendChild(paraValue);

    newCard.appendChild(para);
    main.appendChild(newCard);







    const h3Value = newHeading.innerText;

    if (!Array.isArray(savedTasks[h3Value])) {
        savedTasks[h3Value] = [];
        savedTasks[h3Value].push(valueTextArea);
    }
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));


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
        let textAreaValue = e.target.parentElement.parentElement.parentElement.parentElement.children[1];
        let addValue = e.target.parentElement.parentElement.parentElement.parentElement;



        console.log(textAreaValue);
        let targetChildren = getValue.children[0];
        console.log(targetChildren);
        targetChildren.remove();

        let updateInput = document.createElement("input");
        updateInput.setAttribute("class", "styling")
        updateInput.setAttribute("type","text")
        updateInput.setAttribute("value", `${targetChildren.innerText}`);

        let UpdateTextArea = document.createElement("textarea");
        let createValueTextArea = document.createTextNode(textAreaValue.innerText)
        UpdateTextArea.appendChild(createValueTextArea);


        console.log(updateInput);
        getValue.appendChild(updateInput);
        textAreaValue.remove();
        addValue.appendChild(UpdateTextArea)

        let updted1 = document.createElement("input");
        
    })
}
for (const test in savedTasks) {
    let showValue = savedTasks[test][0];
    let showHeading = test;

    createCard(showHeading, showValue);

}
