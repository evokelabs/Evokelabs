<?php

// This will be the admin Name and Password
// The admin has full access to modify the editor using the right-click menu 
$adminName = "evokelabs";
$adminPass = "hydralisk";


// This will be a regular user
// This user can use the editor, but cannot access the right-clikc menu to change any settings
$userName = "user";
$userPass = "user";


// We are going to hash all of the values for better security
$nameInput = $_GET['name'];
$passInput = $_GET['pass'];

$adminName = md5($adminName);
$adminPass = md5($adminPass);
$userName = md5($userName);
$userPass = md5($userPass);


// Compare the hashed values to determine a successful login

if($nameInput == $adminName && $passInput == $adminPass) {
print "s=2";
}

else if ($nameInput == $userName && $passInput == $userPass) {	
print "s=1";
}

else {
print "s=0";
}

?>