function resize(x, y) {
    var xRote = document.documentElement.clientWidth / x;
    var yRote = document.documentElement.clientHeight / y;
    $('#mssOut').css({
        'width': x + 'px',
        'height': y + 'px',
        'transform': 'scale(' + xRote + ')',
        'transform-origin': '0 0'
    })
    $('body').height(xRote * y)
};
$(window).bind("load resize", function () {
    resize(1920, 1080)
});