var actions = function() {
    this.click = function() {
        this.element = $("a");
        this.action  = function() { };
        this.get     = function() {
            var self = this;
            self.element.click(function( e ) {
                e.preventDefault();
                self.action();
            });
        };
    };
};