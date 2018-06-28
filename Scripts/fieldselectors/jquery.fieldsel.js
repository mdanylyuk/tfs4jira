(function ($) {
    var defaults = {
        getvalues: null
        , width: '200px'
        , border: '1px solid #CCCCCC'
        , selection: null
        , fieldCache: {}
        , hidekey: false
    };

    var methods = {
        init: function (options) {
            if (!options.getvalues) {
                console.log('"getvalues" parameter is mandatory');
                return;
            }
            var settings = $.extend(true, {}, defaults, options);
            $(this).data("settings", settings);

            var me = this;
            return this.each(function (i, o) {
                $(o).wrap(function () {
                    return '<div class="fieldswrap" />';
                });

                $(o).css({ 'width': settings.width
                    , 'border': settings.border
                });
                $(o).parent().append('<div class="selectedfield"><div class="selectedfieldname"></div><input type="button" class="clearfield"></div>');
                $(o).parent().find('.selectedfriend').css({ 'width': settings.width });
                $(o).next().find('.clearfield').click(function (e) {
                    e.preventDefault();
                    settings.selection = null;
                    methods.clearSel.apply(me);
                    $(this).parent().parent().find(".ui-autocomplete-input").focus();
                });
                $(o).autocomplete({
                    minLength: 0,
                    source: function (request, response) {
                        if ($(o).attr('disabled')) { response({}); return; }

                        if (settings.fieldCache.length > 0) {
                            getFromCache(settings, request, response);
                            return;
                        }

                        $(o).addClass('ui-autocomplete-loading');

                        settings.getvalues(
                            function () {
                                $(o).removeClass('ui-autocomplete-loading');
                                $(o).removeAttr('disabled');
                            },
                            function (data) {
                                settings.fieldCache = data;
                                getFromCache(settings, request, response);
                            },
                            function () {
                                response({});
                            }
                        );
                    },
                    select: function (e, ui) {
                        $(o).val(ui.item.label);
                        $(o).parent().find('.selectedfieldname').html(ui.item.label);
                        $(o).parent().find('.selectedfield').show();
                        $(o).attr('disabled', 'disabled');
                        $(o).css({ 'border': 'none', 'width': '1px', 'display': 'none' });
                        settings.selection = { id: ui.item.value, name: ui.item.label };
                        $(o).parent().find(".clearfield").focus();
                        return false;
                    },
                    focus: function (e, ui) {
                        $(o).val(ui.item.label);
                        return false;
                    }
                });
            });
        },
        getSel: function () {
            var sel = null;
            this.each(function (n) {
                var settings = $(this).data('settings');
                sel = settings.selection;
            });
            return sel;
        },
        setSel: function (key, val) {
            this.each(function (n) {
                var settings = $(this).data('settings');
                $(this).val(val);
                $(this).parent().find('.selectedfieldname').html(getLabel(settings, key, val));
                $(this).parent().find('.selectedfield').show();
                $(this).attr('disabled', 'disabled');
                $(this).css({ 'border': 'none', 'width': '1px', 'display': 'none' });
                settings.selection = { id: key, name: val };
            });
        },
        clearSel: function () {
            this.each(function (n) {
                var settings = $(this).data('settings');
                settings.selection = null;
                $(this).val('');
                $(this).parent().find('.selectedfieldname').html('');
                $(this).parent().find('.selectedfield').hide();
                $(this).removeAttr('disabled');
                $(this).css({ 'border': settings.border, 'width': settings.width, 'display': 'block' });
                $(this).removeClass('ui-autocomplete-loading');

            });
        },
        clearCache: function () {
            this.each(function (n) {
                var settings = $(this).data('settings');
                settings.fieldCache = {};
            });
        }
    };

    $.fn.fieldsel = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.fieldsel');
        }
    };

    getFromCache = function (settings, request, response) {
        var term = request.term;
        var fields = [];
        for (var i = 0; i < settings.fieldCache.length; ++i) {
            if (settings.fieldCache[i].Key.toLowerCase().indexOf(term.toLowerCase()) >= 0
            || settings.fieldCache[i].Value.toLowerCase().indexOf(term.toLowerCase()) >= 0) {
                fields.push({ label: getLabel(settings, settings.fieldCache[i].Key, settings.fieldCache[i].Value), value: settings.fieldCache[i].Key });
            }
        }
        response(fields);
    };

    getLabel = function (settings, key, val) {
        return (settings.hidekey ? '' : ('[' + key + '] ')) + val
    };

})(jQuery);



