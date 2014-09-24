(function ($) {
    $ (function () {
        var table = $ ('#Grid1ContainerTbl');

        var present = function (e) {
            e.preventDefault ();
            e.data.find ('input[type=checkbox]').attr ('checked', 'checked');
        },
        absent = function (e) {
            e.preventDefault ();
            e.data.find ('input[type=checkbox]').removeAttr ('checked');
        }

        table.find ('> tbody > tr').each (function (i) {
            if (i == 0) {
                return;
            }

            var tr = $ (this);

            if (tr.find ('input:checkbox[disabled]').length) {
                return;
            }

            var newTd = $ ('<td />');

            var aPr = $ ('<a/>')
                    .attr ('href', 'javascript:;')
                    .unbind ('click')
                    .click (tr, present)
                    .css ('color', 'blue')
                    .text ('Presente');
            var aAb = $ ('<a/>')
                    .attr ('href', 'javascript:;')
                    .unbind ('click')
                    .click (tr, absent)
                    .css ('marginLeft', '10px')
                    .css ('color', 'red')
                    .text ('Ausente');

            newTd.append ([aPr, aAb]);

            tr.append (newTd);
        })
    });
}) (jQuery);