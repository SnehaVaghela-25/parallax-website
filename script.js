const hill1 = document.getElementById("hill1"),
hill2 = document.getElementById("hill2"),
hill3 = document.getElementById("hill3"),
tree = document.getElementById("tree"),
leaf = document.getElementById("leaf"),
title = document.getElementById("title");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;

    title.style.marginTop = value * 1.1 + "px";
    
    hill1.style.bottom = -value * 2 + "px";
    hill2.style.left = value * -1.5 + "px";
    hill3.style.left = value * 1.5 + "px";  
    
    leaf.style.top = value * -1.5 + "px";    
    leaf.style.left = value * 1.5 + "px";    
})

document.getElementById("year").textContent = new Date().getFullYear();