let menuAcionador = document.getElementById("btnOpenMenu")
let menuContainer = document.getElementById("menuLateral")

menuAcionador.addEventListener('click', ()=>{
    menuContainer.classList.toggle ('ativo')
})

