var events = function() {
    this.click = function() {
        this.trigger = $("a");
        this.action  = function( trigger ) { };
        this.get     = function() {
            var self = this;
            self.trigger.click(function( e ) {
                e.preventDefault();

                if(typeof self.action=="function") {
                    self.action( $(this) );
                } else {
                    for( i=0; i<self.action.length; i++ ) {
                        self.action[i]( $(this) );
                    }
                }
            });
        };
    };
    this.load = function() {
        this.action = function( target ) {
            return function( trigger ) {
                target.load( trigger.attr("href") );
            }
        }
    };
};