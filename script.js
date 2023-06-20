class MobileNavbar {
constructor(mobileMenu, navList, navLinks) {  //propriedades da classe menu
  this.mobileMenu = document.querySelector(mobileMenu);  
  this.navList = document.querySelector(navList);
  this.navLinks = document.querySelectorAll(navLinks);
  this.activeClass = "active";   

  this.handleClick = this.handleClick.bind(this);  //método bind que referencia o "this" para a classe
}

animateLinks() {   //método para animar toda vez que alguém clicar
  this.navLinks.forEach((link, index) => {
    link.style.animation      //verificar se o link possui a propriedade "animation"(se não possuir, adiciona, se possuir, remove)
      ? (link.style.animation = "")   //se existir ele remove
      : (link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3   //pequeno delay
        }s`);   //se não existir ele adiciona
  });
}

handleClick() {    
  this.navList.classList.toggle(this.activeClass);
  this.mobileMenu.classList.toggle(this.activeClass);
  this.animateLinks();
}

addClickEvent() {
  this.mobileMenu.addEventListener("click", this.handleClick); //evento de click no menu
}

init() {
  if (this.mobileMenu) {
    this.addClickEvent();
  }
  return this;
}   //método que inicia a função verificando se mobileMenu existir
}

const mobileNavbar = new MobileNavbar(   //criação da barra de navegação mobile
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();