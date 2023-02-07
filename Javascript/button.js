const corner = document.getElementById("Corner");
const homebutton = document.getElementById("btn");
const button = document.getElementById("hbtn");
const lnkdv = document.getElementById("lnk_dv");
const link1 = document.getElementById("lnk1");
const link2 = document.getElementById("lnk2");
const link3 = document.getElementById("lnk3");
const link4 = document.getElementById("lnk4");
const link5 = document.getElementById("lnk5");
const link6 = document.getElementById("lnk6");
const link7 = document.getElementById("lnk7");

homebutton.addEventListener("click", () => {

    corner.classList.toggle("homeanim2"), button.classList.toggle("homebtnanim2"), corner.classList.toggle("homeanim"), button.classList.toggle("homebtnanim"), link1.classList.toggle("link_appearance"), link2.classList.toggle("link_appearance"), link3.classList.toggle("link_appearance"), link4.classList.toggle("link_appearance"), link5.classList.toggle("link_appearance"), link6.classList.toggle("link_appearance"), link7.classList.toggle("link_appearance");
});

homebutton.addEventListener("click", () => {
    lnkdv.classList.toggle("lnkdv");
});

setTimeout(function(){
    document.body.className="";
},500);