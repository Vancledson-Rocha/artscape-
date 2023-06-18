const celular = [...document.querySelectorAll('.bottServ')]
const bt1 = document.querySelector('#serv-1')
const bt2 = document.querySelector('#serv-2')
const bt3 = document.querySelector('#serv-3')
const bt4 = document.querySelector('#serv-4')
const icons = [...document.querySelectorAll('.opc')]

celular.map((el)=>{
  el.addEventListener('mouseenter',(e)=>{
    zerou()

    var elem = celular.indexOf(el)
    if(elem == 0){
      padrao()
    }else if(elem == 1){
      bt1.classList.add('tam-2')
      bt2.classList.add('tam-1')
      bt3.classList.add('tam-2')
      bt4.classList.add('tam-3')
      semIcon(elem)
    }else if(elem == 2){
      bt1.classList.add('tam-3')
      bt2.classList.add('tam-2')
      bt3.classList.add('tam-1')
      bt4.classList.add('tam-2')
      semIcon(elem)
      icons[0].classList.add('noVisualiza')
    }else if(elem == 3){
      bt1.classList.add('tam-4')
      bt2.classList.add('tam-3')
      bt3.classList.add('tam-2')
      bt4.classList.add('tam-1')
      semIcon(elem)
    }
  })
})

function semIcon(vl){
  icons[vl].classList.add('visualiza')
  if(vl == 1){
    icons[(vl-1)].classList.add('noVisualiza')
    icons[(vl+1)].classList.add('noVisualiza')
    icons[(vl+2)].classList.add('noVisualiza')
  }else{
    icons[0].classList.add('noVisualiza')
    icons[(vl-1)].classList.add('noVisualiza')
    icons[(vl+1)].classList.add('noVisualiza')
    icons[(vl+2)].classList.add('noVisualiza')
    icons[(vl-2)].classList.add('noVisualiza')
  }
  
}

function zerou(){
  bt1.classList.remove('tam-1', 'tam-2', 'tam-3', 'tam-4')
  bt2.classList.remove('tam-1', 'tam-2', 'tam-3', 'tam-4')
  bt3.classList.remove('tam-1', 'tam-2', 'tam-3', 'tam-4')
  bt4.classList.remove('tam-1', 'tam-2', 'tam-3', 'tam-4')
  icons[0].classList.remove('noVisualiza','visualiza')
  icons[1].classList.remove('noVisualiza','visualiza')
  icons[2].classList.remove('noVisualiza','visualiza')
  icons[3].classList.remove('noVisualiza','visualiza')
}

function padrao(){
  bt1.classList.add('tam-1')
  bt2.classList.add('tam-2')
  bt3.classList.add('tam-3')
  bt4.classList.add('tam-4')

}



// animação serviços
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


const card = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    card.forEach(function(e){
        if((windowTop) >= e.offsetTop){
            e.classList.add(animationClass)
        }else{
            e.classList.remove(animationClass)
        }
    })
}

animeScroll()

window.addEventListener('scroll', debounce(function(){
    animeScroll()
}, 200))