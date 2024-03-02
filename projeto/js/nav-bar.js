class NavMenu {
    constructor(menuMobile, navList, navLinks){
        this.menuMobile = document.querySelector(menuMobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.ativa = "ativa";

        this.click = this.click.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5 ease forwards ${index / 1.5  + 0.3}s`);
        });
    }

    click(){
        this.navList.classList.toggle(this.ativa);
        this.menuMobile.classList.toggle(this.ativa);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuMobile.addEventListener("click", () => this.click());
    }

    init(){
        if (this.menuMobile) {
            this.addClickEvent()
        } 
        return this;
    }
}

const navMenu = new NavMenu(
    ".menu-mobile",
    ".nav-list",
    ".nav-list li",
);

navMenu.init();