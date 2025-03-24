const el = document.querySelectorAll('#nav>li');
const lista = document.querySelectorAll('.lista')[0];

console.log(lista);

function myFunction(x) {
    if (x.matches) { 
        el.forEach(element => {
            element.addEventListener(
                "mouseover",
                (event) => {
                    lista.style['z-index'] = '2';
                },
                false,
            );
            element.addEventListener(
                "mouseout",
                (event) => {
                    lista.style['z-index'] = '3';
                },
                false,
            );
        });
    } else {
      lista.style['z-index'] = '2';
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 1155px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  }); 

