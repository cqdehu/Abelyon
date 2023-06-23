<?php

setcookie('operation', '', time() - 3600, '/');
setcookie('difficulty', '', time() - 3600, '/');
setcookie('level', '', time() - 3600, '/');

echo "/home.html";