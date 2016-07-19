/* 
 * Скрипт инициализации fancybx
 * Packed by online tools http://dean.edwards.name/packer/
 *
 */

jQuery(function($){
    var type_image = 'a[href$=\".bmp\"],a[href$=\".gif\"],a[href$=\".jpg\"],a[href$=\".jpeg\"],a[href$=\".png\"]';
    var select = $(type_image).not('.nofancybx');       // ассоциируем и добавляем исключающий класс
    select.attr('class', 'fancybx');                    // присваиваем всем картинкам класс
    var notAtr = select.not('[data-fancybox-group]');   // выбираем кроме
    notAtr.attr('data-fancybox-group', 'fancybx');      // и объединяем их в одну группу
    notAtr.fancybox();

    jQuery('.fancybx').fancybox({
        'margin' : '58 0 0'
    });

    var game = $('a[href$=\".swf\"]');
    game.attr('class', 'game');
    game.fancybox();
    jQuery('.game').fancybox({
        'type'              : 'iframe',
        'showNavArrows'     : false,
        'enableKeyboardNav' : false,
        'width'             : '95%',
        'height'            : '100%',
        'margin'            : '58 0 0'
    });

    jQuery('.iframe').fancybox({
        'type'      : 'iframe',
        'width'     : '100%',
        'height'    : '100%',
        'margin'    : '58 0 0',
        'onCleanup' : function() { // по закрытию убираем добавленные стили
            $('#fancybox-outer').css({
                'height' : '',
                'width' : 'auto'
            });
        }
    });

    $('.fancybx.iframe').on('click', function () {                          // по клику на .iframe считываем его заданную высоту и ширину
        var my_width	= $(this).attr('data-width');
        var my_height	= $(this).attr('data-height');

        var my_content_id   = $('#fancybox-content');                       // кешируем в переменные
        var my_outer_id     = $('#fancybox-outer');

        var my_hard_style = {'width' : '100%','height' : '100%'};           // подготавливаем для передачи в стили
        var my_data_style = {'width' : my_width,'height' : my_height};

        if ($(this).is('[data-width]') || $(this).is('[data-height]')) {    // если атрибуты есть - назначаем их
            $('#fancybox-wrap').css(my_data_style);
            my_outer_id.css({'height' : my_height});
        }

        if ($(this).is('[data-width]')) {                                   // если атрибут с шириной есть
            var val_width = my_width.match(/[^-\d\.]/g);                    // отрезаем цифры выделяем тип - пиксели или %

            if (val_width == '%'){                                          // если проценты то размеры внутреннего блока должны быть 100%
                my_content_id.css(my_hard_style);
                my_outer_id.css({'width' : '100%'});
            } else {                                                        // а если в пикселях - передаем пиксели
                my_content_id.css(my_data_style);
            }
        }

        else if ($(this).is('[data-height]')) {                             // для высоты аналогично
            var val_height = my_height.match(/[^-\d\.]/g);

            if (val_height == '%'){
                my_content_id.css(my_hard_style);
                my_outer_id.css({'width' : '100%'});
            } else {
                my_content_id.css(my_data_style);
            }
        }
    });
});