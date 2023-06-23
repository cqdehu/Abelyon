<?php

$operation = $_COOKIE['operation'];
$difficulty = $_COOKIE['difficulty'];
$level = $_COOKIE['level'];

$array = array($operation, $difficulty, $level);

$json = json_encode($array);

echo $json;