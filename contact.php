<?php

$email = $_POST['email'];
$title = $_POST['title'];
$message = $_POST['message'];

$from = "poczta@katarzyna-terka.pl";

$to = "poczta@katarzyna-terka.pl";


$content = "Email: " . $email . "\n";
$content .= "Wiadomość: " . $message . "\n";

$header = "Od:" . $from . " \n";
$header .= "Content-Type:text/plain;charset=utf-8";

$success = mail($to, $title, $content, $header);
if ($success){
  echo(json_encode(array("status" =>"success")));
}
else{
  echo(json_encode(array("status" =>"fail")));
}
?>