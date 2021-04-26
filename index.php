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
    <link rel="stylesheet" href="view/public/css/standard.css">
    <link rel="stylesheet" href="view/public/css/index.css">
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
function autoloader($class)
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
spl_autoload_register('autoloader');
include('Routes.php');

?>
<footer>Rodapé</footer>
</body>
</html>