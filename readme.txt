== Установка/Обновление ==

<h3 style="text-align: center;">Установка:</h3>
Т.к. это дополнение для WordPress плагина <a href="https://codeseller.ru/groups/plagin-wp-recall-lichnyj-kabinet-na-wordpress/" target="_blank">WP-Recall</a>, то оно устанавливается через <a href="https://codeseller.ru/obshhie-svedeniya-o-dopolneniyax-wp-recall/" target="_blank"><strong>менеджер дополнений WP-Recall</strong></a>.

1. В админке вашего сайта перейдите на страницу "WP-Recall" -> "Дополнения" и в самом верху нажмите на кнопку "Обзор", выберите .zip архив дополнения на вашем пк и нажмите кнопку "Установить".
2. В списке загруженных дополнений, на этой странице, найдите это дополнение, наведите на него курсор мыши и нажмите кнопку "Активировать". Или выберите чекбокс и в выпадающем списке действия выберите "Активировать". Нажмите применить.


<h3 style="text-align: center;">Обновление:</h3>
Дополнение поддерживает <a href="https://codeseller.ru/avtomaticheskie-obnovleniya-dopolnenij-plagina-wp-recall/" target="_blank">автоматическое обновление</a> - два раза в день отправляются вашим сервером запросы на обновление.
Если в течении суток вы не видите обновления (а на странице дополнения вы видите что версия вышла новая), советую ознакомиться с этой <a href="https://codeseller.ru/post-group/rabota-wordpress-krona-cron-prinuditelnoe-vypolnenie-kron-zadach-dlya-wp-recall/" target="_blank">статьёй</a>




== FAQ ==

= Как использовать? =
* Дополнение автоматически добавляет нужные классы изображениям в записях и страницах, а так же в комментариях.

* Добавить iframe с картой, ютуб видео можно добавив в ссылку класс: <code>class="fancybx iframe"</code>

* Для того, чтобы видео было в галерее (в всплывающем окне были стрелки "следующее", "предыдущее") необходимо в ссылку добавить html-5 атрибут <code>data-fancybox-group</code> и вписать его значение в ссылки к нужным вам видеофайлам.
Например: <code>data-fancybox-group="youtube"</code>


= Пример ютуб видео: =

```
<a class="fancybx iframe" href="http://www.youtube.com/embed/L9szn1QQfas?autoplay=1">Youtube (iframe)</a>
```

= Пример ютуб видео с картинкой и в галерее: =

```
<a data-fancybox-group="youtube" class="fancybx iframe" href="http://www.youtube.com/embed/NrbRO4WOcFY?rel=0&amp;autoplay=1"><img width="" height="" border="0" src="http://img.youtube.com/vi/NrbRO4WOcFY/mqdefault.jpg" alt="Player"></a>
<a data-fancybox-group="youtube" class="fancybx iframe" href="http://www.youtube.com/embed/Yinzn0Jqigo?rel=0&amp;autoplay=1"><img width="" height="" border="0" src="http://img.youtube.com/vi/Yinzn0Jqigo/mqdefault.jpg" alt="Player"></a>
```

- т.е. мы берем id видео из ссылки ютуба и вставляем его два раза: первый раз в тег <code>a</code> - для формирования увеличенного просмотра и второй раз между <code>img.youtube.com/vi/</code> и <code>/mqdefault.jpg</code> - для получения самой картинки.

= Пример гугл карты: =

```
<a class="fancybx iframe" href="http://maps.google.com/?output=embed&amp;f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=London+Eye,+County+Hall,+Westminster+Bridge+Road,+London,+United+Kingdom&amp;hl=lv&amp;ll=51.504155,-0.117749&amp;spn=0.00571,0.016512&amp;sll=56.879635,24.603189&amp;sspn=10.280244,33.815918&amp;vpsrc=6&amp;hq=London+Eye&amp;radius=15000&amp;t=h&amp;z=17">Google maps (iframe)</a>
```


= Хочу чтобы одна картинка НЕ увеличивалась. Можно ее отключить от fancybox? =

- чтобы изображение не увеличивалось в zoom-image добавьте ему класс <code>class="nofancybx"</code>


= Могу задать ширину/высоту окна? =
- Реализация передачи параметров в iframe (не картинки, а только видео и карты) с помощью html5 атрибутов <code>data-width="значение"</code> <code>data-height="значение"</code> (пиксели или %)

Пример:

```
<a class="fancybx iframe" title="video" href="http://www.youtube.com/embed/cYplvwBvGA4" data-fancybox-group="youtube" data-width="50%" data-height="80%">Video #2.2</a>
```


= Какие еще возможности присутствуют? =
- Формирование нонстоп ютуб галереи с автозапуском:

```
<a class="fancybx iframe" href="http://www.youtube.com/embed/Pn0w7vciQCE?playlist=9BMwcO6_hyA,TR3Vdo5etCQ,-0kcet4aPpQ,43vfvIwK9iE,IfB_K4RGtDo,KL7Z4RIosrI,oVLe77sKiS0,_OLUSELxFok,vkIzfG48HTY,JE8s3wbb1_0,aySmGUxq-qo&amp;autoplay=1">Video #3 playlist</a>
```

- и возможность запускать Swf файлы (флеш игры) - но это официально не поддерживается. т.к. не гарантируется полноценная работа:

```
<a href="/wp-content/uploads/ваша-игра.swf">Game not over</a>
```




== Changelog ==
= 2017-04-21 =
v2.6
* Работа с 16-й версией WP-Recall


= 2016-09-26 =
v2.5
* Исправлена ошибка неотключения скриптов и стиля gallery-recall когда в той в опциях стояло "Использовать Fancybox"


= 2016-07-19 =
v2.4
* Работа с 15-й версией WP-Recall
* Скрипты теперь поддерживают минимизацию скриптов от плагина WP-Recall


= 2016-05-20 =
v2.3.2
* Исправлен баг при указании в изображениях атрибута data-fancybox-group


= 2015-12-18 =
v2.3
* Исправлен баг с отображением кнопок "вперед"-"назад", когда изображение одно на странице.


= 2015-12-16 =
v2.2
* Корректировки в стилях.

= 2015-12-03 =
v2.1
* Исправлен баг с тайтл. Теперь он работает по другой логике.
* С этой версии оригинальный fancybox (2010 года) заменен мною на мод @Zenbit (от 2014 года) - Он включает в себя замену не валидного rel, на html-5 атрибут data-fancybox-group. Т.е. чтобы объединить видео в группу (навигация предыдущее-следующее видео) вам нужно добавить data-fancybox-group="youtube"
* Исправлено отображение узких но длинных изображений.
* Исправлена навигация (перекрывала перемотку youtube).
* Добавлен исключающий класс (чтобы изображение не увеличивалось в zoom-image добавьте ему класс class="nofancybx")
* Реализация передачи параметров в iframe с помощью html5 атрибутов data-width="значение" data-height="значение" (пиксели или %)
* Исправлен скрипт инициализации (в html5 плеере iframe — не позволял развернуть видео на полный экран)
* Мои изменения в скрипте fancybox:
- Удален лишний html (наследие от ie-6).
- Табличная верстка заменена на div.
- Изменена логика определения ширины и центрования, логика формирования title.

= 2015-11-11 =
v2.0
* Иконки от Font Awesome. Избавился от закодированных в base64 иконок и уменьшил вес. Новые иконки приятней глазу.
* Исправлен баг, когда тайтл изображения в длину больше, чем ширина картинки.

= 2015-11-09 =
v1.0
* Release




== Поддержка и контакты ==

* Поддержка осуществляется в рамках текущего функционала дополнения
* При возникновении проблемы, создайте соотвествующую тему на форуме поддержки товара
* Если вам нужна доработка под ваши нужды - вы можете обратиться ко мне в <a href="https://codeseller.ru/author/otshelnik-fm/?tab=chat" target="_blank">ЛС</a> с техзаданием на платную доработку.

Полный список моих работ опубликован <a href="http://across-ocean.otshelnik-fm.ru/" target="_blank">на моем демо-сайте</a> и в каталоге магазина <a href="https://codeseller.ru/author/otshelnik-fm/?tab=publics&subtab=type-products" target="_blank">CodeSeller.ru</a>




