let divsArr=['kard1', 'kard2', 'kard3', 'kard4', 'kard5', 'kard6', 'kard7', 'kard8'];

divsArr.forEach((div)=>{
  $(`#${div}`).hover(()=>{
    $(`#${div}-txt`).slideToggle(1000);
    $(`#${div}-overlay`).slideToggle(1000)
  })
})

// $('footer').scroll(()=>{
//   alert('you scrolled the footer')
// })
