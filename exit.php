<?php

setcookie('operation', '', time() - 3600, '/');
setcookie('difficulty', '', time() - 3600, '/');
setcookie('level', '', time() - 3600, '/');

header('Location: https://www.abelyon.com/home.html');
exit();