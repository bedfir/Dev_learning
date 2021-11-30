<?php

require_once "./view/header.php";

// Router frontal
if (isset($_GET["entity"])) {

    switch ($_GET["entity"]) {
        case 'projet':
            // Inclusion du router "projet"
            require_once "./router/Projet.php";
            break;
        case 'client':
            // TODO inclusion du router "client"
            echo "page client <br>";
            break;
        case 'contrat':
            // TODO inclusion du router "contrat"
            echo "page contrat <br>";
            break;

        default:
            # page non conforme aux spécifications
            // default page
            echo "Page Invalide " . $_GET["entity"] . "<br>";
            require_once "./view/default.php";
            break;
    }
} else {
    //  page défaut 
    require_once "./view/default.php";
}


require_once "./view/footer.php";
