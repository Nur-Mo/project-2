<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email address where you want to receive messages
    $to = "nur.mohamed34@gmail.com";
    
    // Subject of the email
    $subject = "Message from $name";
    
    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";
    
    // Send email
    mail($to, $subject, $email_content);
    
    // Redirect back to the form after submission
    header('Location: index.html');
    exit;
}
?>
