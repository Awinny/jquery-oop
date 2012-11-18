var header = function() {
    var header  = $(".header");
    var content = $(".content");

    $("a", header).each(function() {
        click.trigger = $(this);
        click.action  = load.execute( content );
        click.set();
    })
}