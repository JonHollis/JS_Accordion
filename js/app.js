// ES5
// const acc = document.getElementsByClassName('accordion');

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {

//     let content = this.nextElementSibling;

    // if(content.style.maxHeight){
    //   content.style.maxHeight = null;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + 'px';
    // }
//   });
// }

// ES 6
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  acc.addEventListener('click', event => {
    // hide panel
    const accOpen = document.querySelector('.accordion.active');

    if (accOpen && accOpen !== acc ){
      accOpen.classList.toggle('active');
      accOpen.nextElementSibling.style.maxHeight = 0;
    }

    // open panel
    acc.classList.toggle('active');
    const content = acc.nextElementSibling;
    if(acc.classList.contains('active')){
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }
    
  });
});
