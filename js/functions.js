var functions = function() {
    this.fade = function() {
        this.execute = function( target ) {
            return function() {
                target.fadeOut();
            }
        }
    }
    this.load = function() {
        this.execute = function( trigger, target ) {
            return function() {
                target.load(trigger.attr("href"));
            }
        }
    }
}