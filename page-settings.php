<?php

$pages    = array("start", "partners", "about");
$page     = isset($_REQUEST["page"]) ? $_REQUEST["page"] : "start";
$title    = $page;
$text     = "Some text about " . $page;
$template = "standard";

// Bestämmer vilka undersidor som ska finnas beroende på vilken typ av user man är, allternativt ej inloggad
if(isset($user)){
    if(isset($admin)){
        array_merge($pages, array("logout", "admin"));
    }else{
        array_merge($pages, array("logout"));
    }
}else{
    $pages = array_merge($pages, array("login", "register"));
}

// Om den eftefrågade sidan inte finns i $pages
if(!in_array($page, $pages)) {
    $title = "Error";
    $text  = "The page you are looking for does not exist.";
}

// Skriver ut olika strängar beroende på vilken sida den skrivs på
switch ($page):
    default:
    break;
    case "register":
        $template = "form";
    break;
endswitch;

?>