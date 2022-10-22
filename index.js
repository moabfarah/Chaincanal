var navLinks = document.getElementById("navLinks");
var searchBtn = document.getElementById("search_btn")
var closeBtn = document.getElementById("close_btn")
var searchBox = document.getElementById("searchBox")

var nav = document.getElementById("nav")
// nav.style.display = window.getComputedStyle(document.getElementById("nav", null)).getPropertyValue("display")
var menuToggle = document.getElementById("menuToggle")
var header = document.getElementById("header")

searchBtn.onclick = function(){
searchBox.classList.add("active")
closeBtn.classList.add("active")
searchBtn.classList.add("active")


}

closeBtn.onclick = function(){
    searchBox.classList.remove("active")
    closeBtn.classList.remove("active")
    searchBtn.classList.remove("active")
}
menuToggle.onclick = function(){
    if(nav.classList.contains("menu-active")){
        nav.classList.remove("menu-active");
    }else{
        nav.classList.add("menu-active"); 
    }

  
}






// searchBtn.onclick=()=>(
//     searchBox.classList.add("active")
// )
// searchBtn.onclick=()=>(
//   closeBtn.classList.add("active")
// )
// searchBtn.onclick=()=>(
//   searchBtn.classList.add("active")
// )
  


// closeBtn.onclick=()=>(
//     searchBox.classList.remove("active")
// )
// closeBtn.onclick=()=>(
//     closeBtn.classList.remove("active")
// )
// closeBtn.onclick=()=>(
//     searchBtn.classList.remove("active")
// )

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}