$('.imgclick').click(function (e){

    var elm = $(this);
    var xPos = e.pageX - elm.offset().left;

    if((elm.width() / 2) >= xPos){
        window.location.href = "trida_1.html";
    } else {
        window.location.href = "trida_2.html";
    }

});