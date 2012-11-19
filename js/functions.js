var functions = function() {
    this.mainNav = function() {
        this.create = function( trigger, target ) {
            click.trigger = trigger;
            click.action  = Array(
                load.action( target ),
                function( trigger ) {
                    trigger.parent().siblings().removeClass("active");
                    trigger.parent().addClass("active");
                }
            );
            click.get();
        }
    }
}