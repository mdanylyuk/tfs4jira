(function ($) {
    $.fn.makeInvisible = function () {
        return this.css("visibility", "hidden");
    };
    $.fn.makeVisible = function () {
        return this.css("visibility", "visible");
    };
})(jQuery);