<?php
class Controller
{
    public static function CreateView($viewName)
    {
        require_once(dirname(__DIR__). '../Views/'.$viewName.'.php');
    }
}
?>