<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><?= $pagename ?></title>
    <link rel="stylesheet" href="css/master.css" type="text/css" media="screen" title="no title" charset="utf-8" />
    <script type="text/javascript" charset="utf-8" src="js/jquery.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/actions.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/functions.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/initiate.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/header.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/main.js"></script>
    <script type="text/javascript" charset="utf-8" src="js/init.js"></script>
</head>
<body>
    <div class="container" class="<?= $page ?>">
        <div class="header">
            <h1><?= $pagename ?></h1>
<?php

// I navigation.php ligger allt som har med navigationen att göra

require_once("navigation.php");

?>
        </div>
        <div class="content">
