<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>&amp;D</title>
<link rel="icon" type="image/png" href="favicon.png">
</head>
<body>
</body>
</html>

<?php 
$ToEmail = 'provat2000akash@gmail.com'; 
$EmailSubject = 'User Contact Information from Andorsondell Website'; 
$mailheader = "From: ".$_POST["email"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
$MESSAGE_BODY = "User Contact Information from Andorsondell Website<br>";
$MESSAGE_BODY .= "<b>First Name&nbsp;&nbsp;-&nbsp;&nbsp;</b>".$_POST["fname"]."<br>";
$MESSAGE_BODY .= "<b>Last Name&nbsp;&nbsp;-&nbsp;&nbsp;</b>".$_POST["lname"]."<br>";
$MESSAGE_BODY .= "<b>Email Address&nbsp;&nbsp;-&nbsp;&nbsp;</b>".$_POST["email"]."<br>";
$MESSAGE_BODY .= "<b>Message&nbsp;&nbsp;-&nbsp;&nbsp;</b>".$_POST["message"]."<br>";
//echo $MESSAGE_BODY;
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
echo "<script> alert('We will do our best to answer your questions ASAP!'); location.href='".$_SERVER['HTTP_REFERER']."'</script>";
?>
