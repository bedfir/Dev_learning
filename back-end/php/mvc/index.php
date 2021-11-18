<?php

require_once "./view/header.php";


if (isset($_GET["page"])) {

    switch ($_GET["page"]) {
        case 'voiture':
            // Inclusion du router "voiture"
            require_once "./router/voiture.php";
            break;
        case 'pilote':
            // TODO inclusion du router "pilote"
            echo "page pilote <br>";
            break;

        default:
            # TODO page non conforme aux spécifications
            echo "Page Invalide" . $_GET["page"] . "<br>";
            break;
    }
} else {
    // TODO page défaut ?
    echo "Page non définie<br>";
}


require_once "./view/footer.php";







/* // On génère une constante qui contiendra le chemin vers index.php
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']));

require_once(ROOT . 'app/Model.php ');
require_once(ROOT . 'app/Controller.php ');

// On sépare les paramètres
$params = explode('/', $_GET['p']);


// Est-ce qu'un paramètre existe
if ($params[0] != "") {
    $controller = ucfirst($params[0]);

    $action = isset($params[1]) ? $params[1] : 'index';

    require_once(ROOT . 'controllers/' . $controller . '.php');

    $controller = new $controller();

    if (method_exists($controller, $action)) {
        $controller->$action();
    } else {
        http_response_code(404);
        echo "La page demandé n'existe pas";
    }
} else {
}
 */