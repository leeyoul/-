const NAV = document.querySelector("#nav");
const menuBTN = document.querySelector("#menubtn");
const Logoutbtn = document.querySelector("#logoutbtn");


function NavOn() {
    NAV.classList.toggle("openNav");
    if(NAV.classList.contains('openNav')){
        menuBTN.innerHTML =`<span class="material-symbols-outlined">arrow_back_ios</span>`;
    }else { 
        menuBTN.innerHTML =`<span class="material-symbols-outlined">menu</span>`;
    }

};

//요일 가져오기
function getDAY() {
    const DAYmessage = ["월요병 힘내봐요", 
    "화나지만 열심히 일합시다", 
    "일주일에 절반! 좀만 힘내요", 
    "목빠지게 기다리는 주말~", 
    "불타는 금요일 보내세요", 
    "행복한 주말!", 
    "내일 출근 실화..?"];
    const date = new Date();
    let options = { weekday: 'long'};
    const getday = date.getDay();
    const DAY = Intl.DateTimeFormat('ko-KR', options).format(getday);
    TODAY.innerHTML=`<span class="day">오늘은 ${DAY}!</span><br><span class="DAYmessage">${DAYmessage[Number(getday)]}</span>`;    
}


//로그아웃  이벤트
function logOut() {
    let logOutResult = confirm("작성된 TODO리스트가 모두 사라집니다. 정말 로그아웃 하시겠습니까?");
    if(logOutResult){
        localStorage.clear();
        window.location.reload();
    };
}

// 로그인상태 체크하고 왼쪽 세로 메뉴 로그인 상태시에 로그아웃 버튼 나타내기
function loginCheck(){    
    if(localStorage.getItem(USERNAME_KEY) !== null) {
        Logoutbtn.classList.remove(HIDDEN_CLASSNAME);
        }
}

getDAY();
loginCheck();
menuBTN.addEventListener("click", NavOn);
Logoutbtn.addEventListener("click", logOut)


