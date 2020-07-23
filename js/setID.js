const id = document.querySelectorAll('#username');
const id_LS = localStorage.getItem("userInfo");
const getID = JSON.parse(id_LS);
for(var i=0; i < id.length; i++){
    id[i].innerText = getID;
}