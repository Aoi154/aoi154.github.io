const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/itinose.jpg"){
        myImage.setAttribute("src", "images/itinose2.jpg");
    }else {
        myImage.setAttribute("src", "images/itinose.jpg");
    }
};


/*#################################################################*/
//訪問ユーザ名の設定
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `一ノ瀬うるははかわいいよ，${myName}さん`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `一ノ瀬うるははかわいいよ，${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};