<?php
class Route
{
    public static $validRoute = array();
    public static function set($route,$function)
    {
        self::$validRoute[] = $route;
        if($_GET['url'] == $route)
        {
            $function->__invoke();
        }
    }

}
?>