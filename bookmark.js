const plusbookmarkBTN = document.querySelector("#plusbookmark");
const AddBookMarkDiv = document.querySelector("#AddBookMarkDiv");

function addbookmark(){
    AddBookMarkDiv.classList.toggle(HIDDEN_CLASSNAME)
}

function offbookmark() {
    AddBookMarkDiv.classList.add(HIDDEN_CLASSNAME)
}

AddBookMarkDiv.addEventListener("mouseleave", offbookmark)
plusbookmarkBTN.addEventListener("click", addbookmark)