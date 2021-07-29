const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
    if(!menu.classList.contains('is-active') || !menuLinks.classList.contains('active')){
        menu.classList.add('is-active');
        menuLinks.classList.add('active');
        document.body.classList.add('stop-scrolling');
    }else{
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
    }
    
    // if(!menuLinks.classList.contains('active')){
    //     menuLinks.classList.add('active');
    // }else{
    //     menuLinks.classList.remove('active');
    // }
    
}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const productMenu = document.querySelector('#product-page')
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight');
        productMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 3000){
        servicesMenu.classList.remove('highlight');
        productMenu.classList.add('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobole menu when clicking on a menu item
// function hideMobileMenu(){
//     const menuBars = document.querySelector('.is-active');
//     if(window.innerWidth <= 768 && menuBars){
//         menu.classList.toggle('is-active');
//         menuLinks.classList.remove('active');
//     }
// }

const navLinks = document.querySelectorAll('.navbar__item');
const navbarMenu = document.querySelector('.navbar');
function hideMobileMenu(){
    if(menu.classList.contains('is-active') && menuLinks.classList.contains('active') && document.body.classList.contains('stop-scrolling')){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
    }
    // menu.classList.toggle('is-active');
    // menuLinks.classList.remove('active');
}
navLinks.forEach((navLinks)=>{
    navLinks.addEventListener('click', hideMobileMenu);
});
navLogo.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);

//Создание Responsive Products Cards с помощью классов
class ProductCard {
    constructor(title, titleWord2, price, src, descr, parentSelector) {
        this.title = title;
        this.titleWord2 = titleWord2;
        this.price = price;
        this.src = src;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
    }
    
    render() {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('product');
        elementDiv.innerHTML = `
        <div class="product-card">
            <h2 class="name">${this.title}</h2>
            <span class="price">${this.price}</span>
            <a  class="popup-btn">Quick View</a>
            <img src="${this.src}" class="product-img">
        </div>
        <div class="popup-view">
            <div class="popup-card">
                <a><i class="fas fa-times close-btn"></i></a>
                <div class="product-img">
                    <img src="${this.src}" alt="">
                </div>
                <div class="info">
                    <h2>${this.title}<br><span>${this.titleWord2}</span></h2>
                    <p>${this.descr}</p>
                    <span class="price">${this.price}</span>
                    <a href="#"  class="add-cart-btn">Добавить в корзину</a>
                    <a href="#"  class="add-wish">Добавить в список желаний</a>
                </div>
            </div>
        </div>
        `;
        this.parent.append(elementDiv);
    }
}

new ProductCard(
    "Кактус",
    "Комнатное",
    "$2.00",
    "img/1.png",
    "достаточно интересное растение, которое отдает предпочтение травянистым равнинам, сухим лесам и даже пустыням. Каждый вид по-своему уникален и может использоваться не только как декоративное растение, но и принести практическую пользу.",
    ".container-product"
).render();

new ProductCard(
    "Дерево сакура",
    "Не комнатное",
    "$120.00",
    "img/2.png",
    "Вишня  или Сакура — вид декоративных деревьев семейства Розовые. Сакурой также называют соцветия  этих деревьев.Расцветает весной, цветки имеют окраску от ярко-розового до белого. Ежегодный период цветения сакуры длится менее недели.",
    ".container-product"
).render();

new ProductCard(
    "Дерево",
    "Не комнатное",
    "$20.00",
    "img/3.png",
    " жизненная форма деревянистых растений с единственной, отчётливо выраженной, многолетней, в разной степени одревесневшей, сохраняющейся в течение всей жизни, разветвлённой (кроме пальм) главной осью — стволомn",
    ".container-product"
).render();

//Responsive Products Cards

const popupViews = document.querySelectorAll('.popup-view'),
      popupBtns = document.querySelectorAll('.popup-btn'),
      closeBtns = document.querySelectorAll('.close-btn');

//Javascript for quick view button
const popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
    navbarMenu.classList.add('invisible');
}

popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener('click', () => {
        popup(i);
        document.body.classList.add('stop-scrolling');
    });
});

//Javascript for close button
closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
            navbarMenu.classList.remove('invisible');
            document.body.classList.remove('stop-scrolling');
        });
    });
});
popupViews.forEach((popupView) =>{
    popupView.addEventListener('click', (e)=>{
        if(e.target === popupView){
            popupView.classList.remove('active');
            navbarMenu.classList.remove('invisible');
            document.body.classList.remove('stop-scrolling');
        }
    })
})

//создание карточек section с помощью классов
class SectionCard {
    constructor(src, alt, titleWord1, titleWord2, descr, title2Word1, title2Word2, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.titleWord1 = titleWord1;
        this.titleWord2 = titleWord2;
        this.descr = descr;
        this.title2Word1 = title2Word1;
        this.title2Word2 = title2Word2;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const element = document.createElement('div');
        element.classList.add('image');
        element.innerHTML = `
        <!-- image card start -->
    
           <img src="${this.src}" alt="${this.alt}">
           <div class="details">
               <h2>${this.titleWord1} <span>${this.titleWord2}</span></h2>
               <p>${this.descr}</p>
               <div class="more">
                   <a href="#" class="read-more">${this.title2Word1} <span>${this.title2Word2}</span></a>
                   <div class="icon-links">
                       <a ><i class="fas fa-heart"></i></a>
                       <a ><i class="fas fa-eye"></i></a>
                       <a ><i class="fas fa-paperclip"></i></a>
                   </div>
               </div>
           </div>
       
       <!-- image card end -->
        `;
        this.parent.append(element);
    }
}

new SectionCard(
    "img/1.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row"
).render();

new SectionCard(
    "img/2.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row"
).render();

new SectionCard(
    "img/3.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row"
).render();

new SectionCard(
    "img/4.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row2"
).render();

new SectionCard(
    "img/5.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row2"
).render();

new SectionCard(
    "img/6.jpg",
    "sorry",
    "YOUR",
    "TITLE",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, id ducimus? Voluptates, voluptatem aliquid ut vel eveniet.",
    "ROAD",
    "MORE",
    ".row2"
).render();
//registr CSS 
const x=document.getElementById('login');
const y=document.getElementById('register');
const z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

//javascript для прокрутки до верхней кнопки

const scrollBtn = document.querySelector('.scrollTpTop-btn');

window.addEventListener('scroll',function(){
    scrollBtn.classList.toggle('active',window.scrollY > 500);
})

//javascript для прокрутки назад к началу при нажатии кнопки прокрутки вверх

scrollBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})