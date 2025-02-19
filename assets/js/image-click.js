document.querySelectorAll('.imgclick').forEach(function(elm) {
    elm.addEventListener('click', function(e) {
        var xPos = e.pageX - elm.getBoundingClientRect().left;

        if ((elm.clientWidth / 2) >= xPos) {
            window.location.href = "trida_1.html";
        } else {
            window.location.href = "trida_2.html";
        }
    });
});