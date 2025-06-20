console.log("Hey, I am working now");

let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar-menu");

menu.onclick = () => { 
    if(sidebar.style.right == "-60vw") {
        sidebar.style.right = "0vw"
    }
    else {
        sidebar.style.right = "-60vw"
    }
}



 