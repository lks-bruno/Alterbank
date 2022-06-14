function scrollHeader() {
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) {
        nav.classList.add('active-header');
    } else {
        nav.classList.remove('active-header');
    }
}

window.addEventListener('scroll', scrollHeader)

const dropdwonmenu1 = document.getElementById('dropdown-item-1');
const dropdwonmenu2 = document.getElementById('dropdown-item-2');
const dropdwonmenu3 = document.getElementById('dropdown-item-3');

const menuitem1 = document.getElementById('menu-item-1');
const menuitem2 = document.getElementById('menu-item-2');
const menuitem3 = document.getElementById('menu-item-3');

function showdropdown1() {
   
    dropdwonmenu1.classList.toggle('active-dropdown-menu');
    dropdwonmenu2.classList.remove('active-dropdown-menu');
    dropdwonmenu3.classList.remove('active-dropdown-menu');
}

function showdropdown2() {
   
    dropdwonmenu1.classList.remove('active-dropdown-menu');
    dropdwonmenu2.classList.toggle('active-dropdown-menu');
    dropdwonmenu3.classList.remove('active-dropdown-menu');
}

function showdropdown3() {
    dropdwonmenu1.classList.remove('active-dropdown-menu');
    dropdwonmenu2.classList.remove('active-dropdown-menu');
    dropdwonmenu3.classList.toggle('active-dropdown-menu');
}

function removemenu() {
    dropdwonmenu1.classList.remove('active-dropdown-menu')
    dropdwonmenu2.classList.remove('active-dropdown-menu')
    dropdwonmenu3.classList.remove('active-dropdown-menu')
}

menuitem1.addEventListener('click', showdropdown1);
menuitem2.addEventListener('click', showdropdown2);
menuitem3.addEventListener('click', showdropdown3);

dropdwonmenu1.addEventListener('mouseleave', removemenu)
dropdwonmenu2.addEventListener('mouseleave', removemenu)
dropdwonmenu3.addEventListener('mouseleave', removemenu)


 const showMenu = (idToggle, idNav)=> {
    const toggle = document.getElementById(idToggle);
    const nav = document.getElementById(idNav);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx')
        })
    }

 }

 showMenu('bx','menu-mobile')













 