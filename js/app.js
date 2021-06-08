function textReveal (){

  var acc = document.getElementsByClassName('accordion');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

      var content = this.nextElementSibling;

      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}

textReveal ();
