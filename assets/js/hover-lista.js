const el = document.querySelectorAll('#nav>li');
const lista = document.querySelectorAll('.lista')[0];

console.log(lista);

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

