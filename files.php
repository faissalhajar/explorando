<?php
    // Specify the directory to scan for files
    $dir    = '/';
    // Store the scandir results in a variable
    $files = scandir($dir);
    // Encode the array in JSON and echo it
    echo json_encode($files);
?>