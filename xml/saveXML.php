<?php
$xmlString = $_POST['XMLString'];
$xmlString = html_entity_decode($xmlString);
$xmlString =  stripslashes($xmlString);
$xmlLoc = $_POST['fileLoc'];
$file = fopen($xmlLoc, "w+") or die("Can't open XML file");

if(!fwrite($file, $xmlString)){
print "Error Saving File";
}else{
print "XML file saved";
}
fclose($file);

//©Michael Hejja - 2008 : michaelhejja.com
?>