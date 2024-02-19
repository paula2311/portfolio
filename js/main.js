const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalcloseBtn = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");

}
learnmoreBtns.forEach((learnmoreBtns,i) => {
    learnmoreBtns.addEventListener('click', ()=>{
        modal(i);
    });
});
modalcloseBtn.forEach((modalcloseBtn)=>{
    modalcloseBtn.addEventListener('click',()=>{
        serviceModals.forEach((modalView)=> {
            modalView.classList.remove("active");
        });
    });
});


const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");



menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});
closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
    navItem.addEventListener("click",()=>{
        navigation.classList.remove("active");
    });
});