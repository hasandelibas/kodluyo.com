<?php

// Tarayici uzerinden gelen dili koruyarak statik online editor sayfasina yonlendir.
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'python';
header('Location: online.html?lang=' . urlencode($lang), true, 302);
exit;

