<?php// wp_enqueue_scripts - работает только в лицевой части - проверка на is_admin не нужна// если активен аддон галлерея и стоит в нем использовать fancybox - отключаем стиль и скрипты стандартного fancyboxfunction zoomin_initiale() {    global $active_addons, $rcl_options;    if ($active_addons['gallery-recall'] && $rcl_options['fancybox_grcl'] == 1) {        wp_deregister_style('grcl_fancybox_style');        wp_deregister_script('grcl_mousewheel');        wp_deregister_script('grcl_fancybox');    }}add_action('wp_enqueue_scripts','zoomin_initiale',20);// подключаю скриптыfunction zooim_load_resource() {    if(!is_admin()){        rcl_enqueue_style('zoom-image',rcl_addon_url('style.css', __FILE__));        rcl_enqueue_script('zoomin_fancybox_init', rcl_addon_url('incl/fancybx-init.js', __FILE__),false,true); // в футере        rcl_enqueue_script('zoomin_fancybox', rcl_addon_url('incl/my-fancybx.js', __FILE__)); // подключаю свой    }}add_action('rcl_enqueue_scripts', 'zooim_load_resource',10);