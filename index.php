<?php

ob_start();

// I settings.php lagras alla inställningar som ska användas på fler än en sida

require_once("settings.php");

// I page-settings.php lagras alla inställningar som är separata för de olika undersidorna

require_once("page-settings.php");

// I top.php ligger alla sidors head tag och start för både html och body taggen

!$ajax ? require_once("top.php") : "";

// Här säts $template till den valda sida

require_once("template/" . $template . ".php");

// Innehåller copyright info

!$ajax ? require_once("bottom.php") : "";

ob_end_flush();

?>