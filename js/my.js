const btn = document.querySelector('.btn_plus');

function BtnClick(){
    const color = btn.style.backgroundColor
    if (color === "rgb(0, 149, 246)"){
        btn.style.backgroundColor = "rgba(0, 149, 246, 0.5)";
    }
    else{
        btn.style.backgroundColor = "rgb(0, 149, 246)";
    }
}
btn.addEventListener("click", BtnClick);