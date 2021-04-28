<?php
class Route
{
    public static $validRoute = array();
    public static function set($route,$function)
    {
        self::$validRoute[] = $route;
        if(isset($_GET['url']) && $_GET['url'] == $route || empty($_GET['url']))
        {
            $function->__invoke();
        }
    }

}
?>