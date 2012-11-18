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
}