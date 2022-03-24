let divsArr=['kard1', 'kard2', 'kard3', 'kard4', 'kard5', 'kard6', 'kard7', 'kard8'];

divsArr.forEach((div)=>{
  $(`#${div}`).hover(()=>{
    $(`#${div}-txt`).slideToggle(1000);
    $(`#${div}-overlay`).slideToggle(1000)
  })
})
//enable click event on the arrow down
let arrowDownBtn= document.getElementById('arrow-down');
arrowDownBtn.onclick=()=>{
  let qualifyDiv= document.getElementById('qualify');
  qualifyDiv.scrollIntoView();
}

//fade in scroll elements

const scrollOffset=100;

// target elements
const scrollElements=document.querySelectorAll('.js-scroll');

// fade out elements
// scrollElements.forEach((el)=>{
//   el.style.opacity=0;
// })

//detecting when the elemnt is in view
const elementInView= (el, offset=0)=>{
  const elementTop=el.getBoundingClientRect().top;
  return ((elementTop<=window.innerHeight || document.documentElement.clientHeight)-offset);
}

//assign class to element

const displayScrollElement=(element)=>{
  element.classList.add('scrolled');
}

//hide scroll element
const hideScrollElement=(element)=>{
  element.classList.remove('scrolled');
}

//combined logic


const handleScrollAnimation=()=>{
  scrollElements.forEach((el)=>{
    if(elementInView(el,scrollOffset)){
      displayScrollElement(el);
    }else{
      hideScrollElement(el);
    }
  })
}

//scroll event

window.addEventListener('scroll',()=>{
  handleScrollAnimation();
})