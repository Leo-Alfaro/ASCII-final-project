// definição dos links das imagens que aparecem no hero
let imgs = ["../imgs/hero_tshirt_2.png","../imgs/hero_tshirt_1.png","../imgs/hero_pants.png"]
// definição botões de movimentação de direita e esquerda respectivamente da imagem
let oneFront = document.getElementById("oneFront")
let oneBack = document.getElementById("oneBack")
// Ativação da função quando a janela carrega já estiver totalmente carregada para evitar problemas
window.addEventListener("load", heroTransition);
// função que a cada 5 segundos muda a imagem do hero
function heroTransition() {
    let container = document.getElementById('hero-img');
    let i = 0;
    setInterval(
        function(){
            container.src = `${imgs[i]}`
            i++;
            if(i == imgs.length){
                i = 0;
            }
        }, 5000
    )
    oneBack.addEventListener("click", function() {
        changeTransition(false)
    })
    oneFront.addEventListener("click", function(){
        changeTransition(true)
    })
    function changeTransition(bool){
        if(bool){
            if(i+1 == imgs.length){
                i = 0;
            }else{
                i++;
            }
            container.src = `${imgs[i]}`
        }else{
            if(i-1 < 0){
                i = imgs.length - 1;
            }else{
                i--;
            }
            container.src = `${imgs[i]}`
        }
    }
}
