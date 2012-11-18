var header = function() {
    var header  = $(".header");
    var content = $(".content");

    $("a", header).each(function() {
        click.trigger = $(this);
        click.action  = Array(
            load.execute( content ),
            active.execute()
        );
        click.get();
    })
}