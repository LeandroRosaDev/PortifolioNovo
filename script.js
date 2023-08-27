// Script para ativar o modo dark
const chk = document.getElementById('chk')

chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark'),
    document.querySelectorAll('.titulo, .nunito400, .subTitulo, .tituloIntroducao').forEach(element => {
        console.log(element)
        element.classList.toggle('darkTitulo')
    })
   
}) 

