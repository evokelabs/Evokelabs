<?php

// get the jpg encoded data from Flash
$jpegData = $GLOBALS["HTTP_RAW_POST_DATA"];

//header('Content-Type: image/jpeg');

// Try to create the file
$fileName = $_GET['name'];
$file = fopen($fileName, "w+") or die("Can't create the file");

if(!fwrite($file, $jpegData)){
print "Error Saving the File";
}else{
print "File Saved Successfully";
}
fclose($file);
?>