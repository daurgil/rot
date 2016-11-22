<?php
/////SITE_ROOT
$path = $_SERVER['DOCUMENT_ROOT'] . '/rot/';
define('SITE_ROOT', $path);

/////SITE_PATH
define('SITE_PATH', 'http://'.$_SERVER['HTTP_HOST'].'/rot/');

///PRODUCTION
define('PRODUCTION', true);

//URL AMIGABLES
define('URL_AMIGABLES', TRUE);

///CSS
define('CSS_PATH', SITE_PATH.'view/css/');

//JS
define('JS_PATH', SITE_PATH . 'view/js/');

//Plugins
define('PLUGINS_PATH', SITE_PATH . 'view/plugins/');

//IMG
define('IMG_PATH', SITE_PATH . 'view/img/');

////log

define('LOG_DIR', SITE_ROOT.'classes/log.class.singleton.php');
define('PROD_LOG_DIR', SITE_ROOT.'log/products/Site_Products_errors.log');
define('GENERAL_LOG_DIR', SITE_ROOT.'log/general/Site_General_errors.log');

///model
define('MODEL_PATH', SITE_ROOT.'model/');
///view
define('VIEW_PATH_INC', SITE_ROOT.'view/inc/');
define('VIEW_PATH_INC_ERROR', SITE_ROOT.'view/inc/templates_error/');
////modules
define('MODULES_PATH', SITE_ROOT.'modules/');

//resources
define('RESOURCES',SITE_ROOT.'resources/');
//media
define('MEDIA_PATH',SITE_ROOT.'media/');
//utils
define('UTILS',SITE_ROOT.'utils/');

//MODULE USERS
define('FUNCTIONS_USERS', SITE_ROOT.'modules/users/utils/');
define('MODEL_PATH_USERS',SITE_ROOT.'modules/users/model/');
define('MODEL_USERS',SITE_ROOT.'modules/users/model/model/');
define('BLL_USERS',SITE_ROOT.'modules/users/model/BLL/');
define('DAO_USERS',SITE_ROOT.'modules/users/model/DAO/');
define('USERS_JS_PATH', SITE_PATH.'modules/users/view/js/');
define('USERS_CSS_PATH',SITE_PATH.'modules/users/view/css/');

//model products
define('UTILS_PRODUCTS',SITE_ROOT.'modules/products/utils/');
define('PRODUCTS_JS_LIB_PATH', SITE_PATH . 'modules/products/view/lib/');
define('PRODUCTS_JS_PATH', SITE_PATH . 'modules/products/view/js/');
define('PRODUCTS_CSS_PATH', SITE_PATH . 'modules/products/view/css/');
define('MODEL_PATH_PRODUCTS',SITE_ROOT.'modules/products/model/');
define('MODEL_PRODUCTS',SITE_ROOT.'modules/products/model/model/');
define('BLL_PRODUCTS',SITE_ROOT.'modules/products/model/BLL/');
define('DAO_PRODUCTS',SITE_ROOT.'modules/products/model/DAO/');
