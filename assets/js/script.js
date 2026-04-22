
// *NavBar Toggle ----------------------->

const navOpenBtn = document.querySelector("[data-nav-open-btn]"),
      navbar = document.querySelector("[data-navbar]"),
      navCloseBtn = document.querySelector("[data-nav-close-btn]"),
      body = document.querySelector("body");

      console.log(navCloseBtn);
      
      
      

const navElements = [navOpenBtn,navCloseBtn];


navElements.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        navbar.classList.toggle("active");
    });
});

// ------------------------------------->


// header and Go top button active on page scroll --->

const header = document.querySelector("[data-header]"),
      goTopBtn = document.querySelector("[data-go-top]")



window.addEventListener("scroll",() => {

    if(window.scrollY > 400){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }

})