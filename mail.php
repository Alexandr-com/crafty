<?php

$recepient = "lex11113@mail.ru";
$sitename = "Crafty";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$body = trim($_POST["body"]);
$message = "Имя: $name \nТелефон: $phone \nТема: $text \nТекст $body";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>