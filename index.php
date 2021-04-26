<?php
require_once('Routes.php');

function __autoload($class)
{
    $file  = $class . '.php';
    if(file_exists('Libraries/Classes/' .$file))
    {
        require_once('Libraries/Classes/' .$file);
    }else if(file_exists('Controllers/'. $file))
    {
        require_once('Controllers/' .$file);
    }
}
?>