<?php

// Inclustion du modèle
require_once "./model/ModelVoiture.php";



class ControllerVoiture

{

    private ModelVoiture $model;


    function __construct()
    {
        $this->model = new ModelVoiture;
    }



    # Ajouter une voiture
    public function add(bool $commit)
    {
        if ($commit) {

            // Récupération des attributs métiers
            $immat = $_GET["immat"];
            $proprio = $_GET["proprio"];

            // Mise à jour du modéle
            $this->model->setImmatriculation($immat);
            $this->model->setPropriétaire($proprio);

            // Ajout dans la DB
            $this->model->add();

            require_once "./view/voiture/action/add-confirmed.php";
        } else {
            require_once "./view/voiture/action/add.php";
            echo "Controller : Ajouter une voiture<br>";
        }
    }
    # Modifier une voiture
    public function edit(bool $commit)
    {
        if ($commit) {
            echo "Controller : Mettre à jour modifier une voiture<br>";
        } else {
            echo
            "Controller : Proposer mettre à jour modifier une voiture<br>";
        }
    }
    # Supprimer une voiture
    public function remove(bool $commit)
    {

        if ($commit) {
            echo "Controller : Supprimer une voiture<br>";
        } else {
            echo "Controller : Proposer de Supprimer une voiture<br>";
        }
    }
    # Lister les voiture
    public function list()
    {
        $voitures = $this->model->getAllVoitures();

        require_once "./view/voiture/action/list.php";
        // echo "Controller : Lister les voiture<br>";
    }
}
