var header = function() {
    var body    = $("body");
    var header  = $(".header", body);

    $("a", header).each(function() {
        var trigger = $(this);
        var target  = $(".content", body);

        mainNav.create( trigger, target );
    });
}