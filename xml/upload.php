<?php

$directory = $_POST['directory'];

//create the directory if doesn't exist (should have write permissons)
if(!is_dir($directory)) mkdir($directory, 0777); 

//move the uploaded file
$tmp_name = $_FILES["Filedata"]["tmp_name"];
$name = $_FILES["Filedata"]["name"];
move_uploaded_file($tmp_name, "$directory/$name");
chmod("$directory/$name", 0777);
return "Upload Complete Dude";

//©Michael Hejja - 2008 : michaelhejja.com
?>