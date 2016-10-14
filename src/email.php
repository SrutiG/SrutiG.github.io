<?php

    $message = $_POST["message"];

    $email_to = "sruti.guhathakurta@gmail.com";
    $email_subject = "New Message on Website";
    $email_message = $message;

    mail($email_to, $email_subject, $email_message);
?>