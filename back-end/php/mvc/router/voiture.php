<?php

require_once "./view/voiture/header.php";
require_once "./control/ControllerVoiture.php";

$control = new ControllerVoiture();

if (isset($_GET["action"])) {
    // Confirmation ou proposition ? 
    $commit = isset($_GET["confirmed"]);


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
require_once "./view/voiture/footer.php";
