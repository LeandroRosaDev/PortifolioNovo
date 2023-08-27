// Script para ativar o modo dark
const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark'),
    document.querySelectorAll('.titulo, .nunito400, .subTitulo,.subTituloProjetos, .tituloIntroducao, .nomeTopo').forEach(element => {
        element.classList.toggle('darkTitulo')
    })
    document.querySelectorAll('.start, .end, .card').forEach(element => {
        element.classList.toggle('darkBg')
    })
    document.querySelectorAll('.btnTransparente, .btnLinkedin').forEach(element => {
        element.classList.toggle('darkBtn')
    })
}) 

// Script para ativar o menu hamburguer

var abrirMenu = document.querySelector('.menuSeta')
var fecharMenu = document.querySelector('.menuFechar')
var navToSection = document.querySelectorAll('.menuLinks')

abrirMenu.addEventListener('click', ()=>{
    abrirMenu.style.display = 'none'
    fecharMenu.style.display = 'block'
    document.querySelector('.menuResponsivo').style.width = '100%',
    document.querySelector('.menuSidebar').style.display = 'flex'
})
fecharMenu.addEventListener('click', ()=>{
    fecharMenu.style.display = 'none'
    abrirMenu.style.display = 'block'
    document.querySelector('.menuResponsivo').style.width = '0%',
    document.querySelector('.menuSidebar').style.display = 'none'
})
navToSection.forEach( function(link){
    link.addEventListener('click', ()=>{
        fecharMenu.style.display = 'none'
        abrirMenu.style.display = 'block'
        document.querySelector('.menuResponsivo').style.width = '0%',
        document.querySelector('.menuSidebar').style.display = 'none'
    })
})

