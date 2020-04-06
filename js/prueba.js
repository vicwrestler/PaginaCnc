$(function() {
    // Selecciona todo lo que contenga class smoothScroll
    $('.cambio').(function() {
        var clase = document.getElementById("menu");
        if (window.screen.width < 768) {
            class.classname = "navbar fixed-bottom justify-content-end mr-md-3 mt-2 mr-sm-1 cambio";
        } else {
            class.classname = "navbar fixed-top justify-content-end mr-md-3 mt-2 mr-sm-1 cambio";
        }
    });
});