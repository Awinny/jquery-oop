var functions = function() {
    this.mainNav = function() {
        this.create = function( trigger, target ) {
            click.trigger = trigger;
            click.action  = Array(
                load.action( target ),
                function( trigger ) {
                    trigger.parent().siblings().removeClass("active");
                    trigger.parent().addClass("active");
                },
                slideNav.create( trigger )
            );
            click.get();
        }
    }
    this.slideNav = function() {
        this.create = function( trigger ) {
            var navigation = trigger.parents("ul");
            if(!navigation.parent().hasClass("slide-nav")) {
                navigation.wrap('<div class="slide-nav" />');
                navigation.parent().append('<span class="active" />');
                $("> .active", navigation.parent() ).width( $("li a:first",navigation).width()+10 );
            }
            return function( trigger ) {
                $("> .active", navigation.parent() ).animate({
                    width: trigger.width() + 10,
                    left: trigger.position().left
                }, 200);
            }
        }
    }
}