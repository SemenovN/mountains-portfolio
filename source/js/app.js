window.addEventListener('mousemove', function (e) {
    var X0 = window.innerWidth / 2 - e.pageX;
    var Y0 = window.innerHeight / 2 - e.pageY;
    var layers = document.querySelectorAll('.parallax_layer');
    [].forEach.call(layers, function(item, index) {
        var bottomPosition = window.innerHeight / 2 * (index / 90);
        item.style.bottom  = '-' + bottomPosition + 'px',
        item.style.transform = 'translate3d(' + X0 * (index / 90) + 'px, ' + Y0 * (index / 90) + 'px, 0)';
    })
    /*for (var i = 0; i < layers.length; i++)
     layers[i].style.transform = 'translate3d(' + X0 / 10 + 'px, ' + Y0 / 10 + 'px, 0)';*/
    //console.log("мыш двигается", X0, Y0, layers);
})