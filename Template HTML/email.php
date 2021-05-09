<?php
$emailTo = 'info@designesia.com';  //Recipient's E-mail
$subject = $_REQUEST['subject'];
$name =  $_REQUEST['name'];
$email = $_REQUEST['email'];
$msg = $_REQUEST['message'];

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$message = 'Name : ' . $name . "<br/>";
$message .= 'Email : ' . $email . "<br/>";
$message .= $msg;

if (@mail($emailTo, $subject, $message, $headers, "-r".$emailTo))
{
     // Transfer the value 'sent' to ajax function for showing success message.
     echo 'sent';
}
else
{
     // Transfer the value 'failed' to ajax function for showing error message.
     echo 'failed';
}
?>