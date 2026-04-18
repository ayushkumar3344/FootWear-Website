
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