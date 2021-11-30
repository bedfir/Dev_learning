<?php

require_once "./view/projet/header.php";
require_once "./controller/ControllerProjet.php";
/**
 * @var object $control instancier de Class ControllerProjet
 */
$control = new ControllerProjet();
// router des actions de l'attribut métier Projet
if (isset($_GET["action"])) {
    // Confirmation ou proposition ?  
    $commit = isset($_GET["commit"]);


    switch ($_GET["action"]) {

        case 'add':
            $control->add($commit);
            break;
        case 'edit':
            $control->edit($commit);
            break;
        case 'remove':
            $control->remove($commit);
            break;
        case 'list':
            $control->list();
            break;
        default:
            $control->list();
            break;
    }
} else {
    $control->list();
}
require_once "./view/projet/footer.php";
