const area = document.querySelector('#tit01')
area.addEventListener('mouseenter' && 'mousemove',(evt)=>{
    document.querySelector('#spaH').classList.add('spanH')
    document.querySelector('#shome').classList.add('shome')
})
area.addEventListener('mouseout',(evt2)=>{
    document.querySelector('#spaH').classList.remove('spanH')
    document.querySelector('#shome').classList.remove('shome')
})



// Animação do FInal

// const logo = document.querySelector('.animeArt')
// const fundo = document.querySelector('.contatos')

// var topo=logo.offsetTop

// window.onscroll=function(){
//     servAnime()
// }

// function servAnime(){
//     if((window.pageYOffset) >= topo){
//         logo.classList.add('fixou')
//         // vaga.classList.add('vaga001')
//     }else{
//         logo.classList.remove('fixou')
//     }
// }


