const plusbookmarkBTN = document.querySelector("#plusbookmark");
const AddBookMarkDiv = document.querySelector("#AddBookMarkDiv");
const AddBookMarkForm = document.querySelector("#AddBookMarkForm");
const bookmarkname = document.querySelector("#bookmarkname");
const bookmarkurl = document.querySelector("#bookmarkurl");
const bookmarkUL = document.querySelector (".bookmark-logoutbtn ul");
const offbookmarkBTN = document.querySelector ("#offbookmarkBTN");

function addbookmark(){
    AddBookMarkDiv.classList.toggle(HIDDEN_CLASSNAME)
}

function offbookmark() {
    AddBookMarkDiv.classList.add(HIDDEN_CLASSNAME)
}

offbookmarkBTN.addEventListener("click", addbookmark)
plusbookmarkBTN.addEventListener("click", addbookmark)




function handlebookmarksubmit (event) {
    event.preventDefault();
    const NAME = bookmarkname.value;  
    const URL = bookmarkurl.value;
    bookmarkname.value ="";
    bookmarkurl.value ="";  
    const newBOOKMARKObj= {
        text: NAME,
        id: Date.now(),
    };
    TODOs.push(newBOOKMARKObj);
    paintBookMark(newBOOKMARKObj);
    saveBookMark();
}



//북마크 추가
function paintBookMark(bookmarkname) {
    const li = document.createElement("li");
    li.id = bookmarkname.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText ="X";
    btn.addEventListener("click", deleteBookMark)
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = bookmarkname.text;
    bookmarkUL.appendChild(li);
}

//북마크 삭제
function deleteBookMark(event) {
    const deleteli = event.target.parentElement;  
    deleteli.remove();
    TODOs = TODOs.filter((todos) => todos.id !== parseInt(deleteli.id));
    saveTodos();
}

let BOOKMARKs = [];

//작성된 TODOs 를 로컬에 저장
function saveBookMark() {
    localStorage.setItem("BOOKMARKs", JSON.stringify(BOOKMARKs));
}




//로컬에 저장된 북마크 불러오기
const callbookmark = localStorage.getItem("BOOKMARKs");
if(callbookmark !==null) {
    const parsedToDos = JSON.parse(callbookmark);
    BOOKMARKs = parsedToDos;
    parsedToDos.forEach(paintBookMark);  
}





AddBookMarkForm.addEventListener("submit", handlebookmarksubmit)