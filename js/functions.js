var functions = function() {
    this.fade = function() {
        this.execute = function( target ) {
            return function() {
                target.fadeOut();
            }
        }
    }
    this.load = function() {
        this.execute = function( target ) {
            return function( trigger ) {
                target.load( trigger.attr("href") );
            }
        }
    }
    this.active = function() {
        this.execute = function() {
            return function( trigger ) {
                trigger.parent().siblings().removeClass("active");
                trigger.parent().addClass("active");
            }
        }
    }
}