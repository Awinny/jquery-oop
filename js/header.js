var header = function() {
    var header = $(".header");
    var content = $(".content");
    $("a", header).each(function() {
        click.element = $(this);
        click.action = load.execute( click.element, content );
        click.get();
    })
}