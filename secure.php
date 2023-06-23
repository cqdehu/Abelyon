<?php

if (isset($_COOKIE['operation']) && isset($_COOKIE['difficulty']) && isset($_COOKIE['level'])) {
    // Mindhárom cookie létezik
    echo "Mindhárom cookie létezik.";
} else {
    // Legalább egy cookie hiányzik
    echo "Legalább egy cookie hiányzik.";
}
