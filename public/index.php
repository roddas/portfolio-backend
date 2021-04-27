<?php
define("URL","http://".$_SERVER['SERVER_NAME'].'/portfolio/');
define('BASE','../App/');

function autoloader($class)
{
    $file  = $class . '.php';
    if(file_exists(BASE . 'Libraries/Classes/' .$file))
    {
        require_once(BASE . 'Libraries/Classes/' .$file);
    }else if(file_exists(BASE . 'Controllers/'. $file))
    {
        require_once(BASE . 'Controllers/' .$file);
    }
}
spl_autoload_register('autoloader');
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu portfólio</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="public/css/standard.css">
    <link rel="stylesheet" href="public/css/index.css">
</head>
<body>
<nav class="menu">
    <ul>
        <li><a href="#">Eu</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Portfolio</a></li>
    </ul>
</nav>
<?php
echo URL;
include(BASE . 'Routes.php');

?>
<footer>Rodapé</footer>
</body>
</html>