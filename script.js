// Script para ativar o modo dark
const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark'),
    document.querySelectorAll('.titulo, .nunito400, .subTitulo,.subTituloProjetos, .tituloIntroducao, .nomeTopo').forEach(element => {
        console.log(element)
        element.classList.toggle('darkTitulo')
    })
    document.querySelectorAll('.start, .end, .card').forEach(element => {
        console.log(element)
        element.classList.toggle('darkBg')
    })
    document.querySelectorAll('.btnTransparente, .btnLinkedin').forEach(element => {
        console.log(element)
        element.classList.toggle('darkBtn')
    })
   
}) 

