var actions = function() {
    this.click = function() {
        this.trigger = $("a");
        this.action  = function( trigger ) { };
        this.set     = function() {
            var self = this;
            self.trigger.click(function( e ) {
                e.preventDefault();
                self.action( $(this) );
            });
        };
    };
};