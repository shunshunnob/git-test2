const body = document.querySelector(".js_body");
    
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");

const navLinks = document.querySelectorAll(".bl_header_nav-link");
navLinks.forEach(navLink =>{
    navLink.addEventListener("click",() =>{
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
        
    })
})
//ハンバーガーをクリックしたら
hamburger.addEventListener("click", () => {
    //それぞれに対してクラスをつけ外しする
      navigation.classList.toggle("is-active");
      hamburger.classList.toggle("is-active");
        body.classList.toggle("is-active");
    });

const accordion = document.querySelector(".js_header-accordion");
const accordionbody = document.querySelector(".js_header_accordion-list");

accordion.addEventListener("click",()=>{
    accordionbody.classList.toggle("is_open");
})


