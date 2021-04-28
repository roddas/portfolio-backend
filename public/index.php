<?php
define('URL','http://localhost/portfolio/');
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
    <link rel="shortcut icon" href="public/img/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" type='text/css' href="public/css/standard.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet"> 
</head>
<body>
<header>
    <a href="<?php echo URL; ?>"><img id='logo' src="public/img/logo.svg" alt=""></a>
    <a href="#"><img id='menu-button' src="public/img/menu.svg" alt=""></a>
</header>
    <nav class="menu" id = "menu">
        <ul class='text-center'>
            <li class=' eu' ><a href="index.php">Me</a></li>
            <li class=' projetos' ><a href="projects">Projects</a></li>
            <li class=' contatos' ><a href="contacts">Contacts</a></li>
            <li class=' portfolio' ><a href="portfolio">Portfolio</a></li>
        </ul>
    </nav>
<?php
include('Routes.php');
?>
<footer><p class='normal text-center'>RCN Soft -  Copyright <?php echo date('Y');?></p></footer>
<script >
var contador = 0;
var button = document.getElementById('menu-button');
var menu = document.getElementById('menu');
menu.style.display = 'none';
button.addEventListener('click',()=>{
if(contador%2 == 0)
{
    button.style.transform = 'rotate(90deg)';
    menu.style.display = 'block';
}
else
{
    button.style.transform = 'rotate(0deg)';
    menu.style.display = 'none';
}
contador++;
});
</script>
</body>
</html>