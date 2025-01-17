<?php

require_once __DIR__.'/router.php';

get('/', 'pages/index.php');
get('/admin', 'admin/index.php');

any('/404','views/404.php');