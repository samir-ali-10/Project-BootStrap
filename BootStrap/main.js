// let inp = document.querySelector(".input");
// let btn = document.querySelector(".add");
// let div = document.querySelector(".tasks");

// function blure(e){
//     e.value === "";
// }

// btn.addEventListener("click", (e) =>{
//     if(inp.value === ""){
//         return false;
//     }
//     window.localStorage.setItem("input-name" , inp.value);
//     let p = document.createElement("p");
//     p.style.backgroundColor = "white";
//     p.textContent = inp.value;
//     let btn2 = document.createElement("button");
//     btn2.textContent = "delete";
//     btn2.style.color = "white";
//     btn2.style.backgroundColor = "red";
//     btn2.style.width = "fit-content";
//     btn2.style.zIndex = "1";
//     btn2.style.border = "none";
//     btn2.style.cursor = "pointer";
//     btn2.onclick = function(){
//         window.localStorage.removeItem("input-name");
//         p.remove();
//         btn2.remove();
//     }
//     div.appendChild(p);
//     div.appendChild(btn2);

// })

// let buttons = document.querySelectorAll("a");
// buttons.forEach(btn =>{
//     btn.addEventListener('click' , function(e){
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clienty - e.target.offsetTop;

//         let ripples = document.createElement("span");
//         ripples.style.left = x + "px";
//         ripples.style.top = y + "px";
//         this.appendChild(ripples);

//         setTimeout(() => {
//             ripples.remove();
//         }, 1000);
//     })
// })

let scollTop = document.querySelector(".top");

window.onscroll = function hideShow() {

    if(document.documentElement.scrollTop > 20) {

        scollTop.style.display = "block";
    }
    else {
        scollTop.style.display = "none";

    }
};

scollTop.addEventListener("click" , () => {

    document.documentElement.scrollTop = 0;
})