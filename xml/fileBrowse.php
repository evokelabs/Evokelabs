<?php

//Grab the folder location submitted from Flash
$folderLocation = $_POST['folderLoc'];


function get_files ($folder) {

	// Remove any slashes at the end of the folder
	if(substr($folder, -1) == '/') {
		$folder = substr($folder, 0, -1);
	}

	// Make sure a valid folder was passed
	if(!file_exists($folder) || !is_dir($folder) || !is_readable($folder)) {
		return FALSE;
	}

	// Grab a file handle
	$all_files = FALSE;

	if($handle = opendir($folder))	{
		$all_files = array();
		$all_folders = array();
		
		// Start looping through a folder contents
		while ($file = @readdir ($handle)) {
			
			// Set the path
			$path = $folder.'/'.$file;		
			
			// Filter out this and parent folder
			if($file != '.' && $file != '..') {
				
				// Test for a file or a folder
				if(is_dir($path)) {
				$all_folders[] = $file;
				} elseif (is_file($path)) {
				$all_files[] = $file;
				}
			}
		}
		// Cleanup
		closedir($handle);

	}

	// Return the folders and files
	@sort($all_folders);
	@sort($all_files);
	
	$folderString = join(",", $all_folders);
	$fileString = join(",", $all_files);
	$output = "folders=$folderString&files=$fileString";
	
	return $output;
}


// Run the function
$allFiles = get_files($folderLocation);
echo $allFiles;

?>