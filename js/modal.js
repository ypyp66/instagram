const modal_button = document.querySelectorAll('.modal_button');
const modal_open = document.querySelector('.modal2');
const modal_close = document.querySelector('.modal_close');
const layer = document.querySelector('.modal_layer');
const body = document.querySelector('body');
const none = "showing";

for (var i=0; i<modal_button.length; i++){
    modal_button[i].addEventListener("click", function openModal(){
        modal_open.classList.remove(none);
        body.style.overflow = "hidden";
    });
}
modal_close.addEventListener("click", function(){
    modal_open.classList.add(none);
    body.style.overflow = "auto";
});
layer.addEventListener("click", function (){
    modal_open.classList.add(none);
    body.style.overflow = "auto";
})