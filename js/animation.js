// % do elemento precisa ser visualizado para animação acontecer
const observerOptions = {
    threshold: 0.3
}
// função que adiciona a style classe nos elementos para a animação acontecer
const animationItems = document.querySelectorAll('[data-animation]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if(entry.target.dataset.animation == "left"){
            if(!entry.target.classList.contains("appers-left")){
              entry.target.classList += " appers-left";
            }
        }else{
          if(!entry.target.classList.contains("appers-right")){
            entry.target.classList += " appers-right";
          }
        }
      }
    })
  }, observerOptions);
  // adicionando em todos os elementos o observador para a funcão ser executada certa
for (let element of animationItems) {
  observer.observe(element)
}