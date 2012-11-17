<?php

$pagename = "Test page";
$user  = $_SESSION['username'];
$admin = isset($user) && $user->admin ? true : false;

$ajax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' ? true : false;

?>