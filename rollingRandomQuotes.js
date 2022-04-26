let prev = document.querySelector(".prev");
let current = document.querySelector(".current");
let next = document.querySelector(".next");


function handdle () {
    let quotes = [
    "얼마전까지 가시밭길 by.브레이브 걸즈", 
    "오히려 좋아 by.침착맨", 
    "견과류는 의외로 맛이 있다 by.이유림", 
    "니가 뭔데 by.지드래곤", 
    "산다는것 그것은 치열한 전투이다 by.이유림",
    "암 온 더 넥스트 레벨 by.에스파."
];
    let sPick = Math.floor(Math.random() * quotes.length);
    //중복방지
    if (quotes[sPick]!==current.innerText){
        current.innerHTML=`${quotes[sPick]}`;
    }
    
}


handdle();
setInterval(handdle, 6000);
