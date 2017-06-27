function barba_main () {
    
    /*Barba main initialization*/
	window.onload = function() {
  		Barba.Pjax.start();
    }
    
    
    /*prevent same page reload*/
    var links = document.querySelectorAll('a[href]');
    var cbk = function(e) {
     if(e.currentTarget.href === window.location.href) {
       e.preventDefault();
       e.stopPropagation();
     }
    };
    for(var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', cbk);
    }
    
    
    
    /*Page transtion initialization*/
    Barba.Pjax.getTransition = function() {
      return Transition;
    };

    
}





barba_main();





















