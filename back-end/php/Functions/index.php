<?php

function repondre_oui_non($phrase)
{
    while (true) {
        $response = readline($phrase . " - (o)ui / (n)on : ");

        if ($response === 'o') {
            return true;
        } elseif ($response === 'n') {
            return false;
        }
    }
}

function demander_creneau($phrase = 'Veuillez entrer un creneau')
{

    echo $phrase . "\n";
    while (true) {
        $ouverture = (int)readline('Heare d\'ouverture : ');
        if ($ouverture >= 0 && $ouverture <= 23) {
            break;
        }
    }

    while (true) {
        $fermeture = (int)readline('Heare de fermeture : ');
        if ($fermeture >= 0 && $fermeture <= 23 && $fermeture > $ouverture) {
            break;
        }
    }

    return [$ouverture, $fermeture];
}
