const header = document.querySelector("[data-header]");
const backTopbtn = document.querySelector("[back-top-btn]");
window.addEventListener("scroll", function(){
    if (this.window.scrollY >= 100){
        header.classList.add("active");
        backTopbtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopbtn.classList.remove("active");
    }
});

