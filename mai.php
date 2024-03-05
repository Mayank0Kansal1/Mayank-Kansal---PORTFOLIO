<?php
// Get data from form 
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$subject= $_POST['subject'];
$Mobile= $_POST['mobile'];

$to = "mkstarmayank221@gmail.com";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n Email = "
	. $email . "\r\n Mobile = "
	. $Mobile . "\r\n Subject = "
	. $subject . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
			"CC: somebodyelse@example.com";
if($email != NULL) {
	mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:index.html");
?>
