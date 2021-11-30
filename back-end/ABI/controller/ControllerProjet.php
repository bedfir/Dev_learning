<?php

// Inclustion du modèle
require_once "./model/ModelProjet.php";


/**
 *  ControllerProjet
 *  Encapsuler les méthodes relative a l'entité métier.
 * 
 *  @var class 
 * 
 */
class ControllerProjet

{
    /**
     *  $model
     * 
     *  @var class 
     */
    private ModelProjet $model;


    /**
     *  instancier $model a chaque exécution 
     * 
     */
    function __construct()
    {
        $this->model = new ModelProjet();
    }
    /**
     * Ajouter un projet
     *  
     * @param bool $commit vérifie si la query string "commit" exist dans l'url
     *  Exemple : if(isset($_GET["commit"])) : true ? false;
     *  
     * @return void 
     */
    public function add(bool $commit)
    {
        // Si $commit && !empty(params) vaut vrai Alors 
        if ($commit && !empty($_GET['code']) && !empty($_GET['nom'])) {

            /**
             * Récupération des attributs métiers
             * 
             * @var string $code recupére la valeur du paramètre code
             */
            $code = $_GET["code"];
            $nom = $_GET["nom"];

            // Mise à jour du modéle
            $this->model->setCode($code);
            $this->model->setNom($nom);

            // Ajout dans la DB
            $this->model->add();

            require_once "./view/projet/action/create/add-confirmed.php";
        } else {
            require_once "./view/projet/action/create/add.php";
            echo "Controller : Ajouter une projet<br>";
        }
    }

    /**
     *  Modifier un projet
     *  
     *  @param bool $commit vérifie si la query string "commit" exist dans l'url
     *  Exemple : if(isset($_GET["commit"])) : true ? false;

     *  @return void 
     */
    public function edit(bool $commit)
    {

        // Si $commit && !empty(params)  vaut vrai Alors 
        if ($commit && !empty($_GET['code']) && !empty($_GET['nom'])) {

            // Récupération des attributs métiers
            $code = $_GET["code"];
            $nom = $_GET["nom"];

            // Mise à jour du modéle
            $this->model->setCode($code);
            $this->model->setNom($nom);

            // Ajout dans la DB
            $this->model->update();

            // Afficher dans view la page confirmed 
            require_once "./view/projet/action/update/edit-confirmed.php";
        } elseif (isset($_GET['code']) && !empty($_GET['code'])) // Sinon si param existe  && param n'est pas vide
        {
            // Recupérer l'attribut
            $code = $_GET["code"];

            // Mise a jour du modéle
            $this->model->setCode($code);

            // recupérér les caractéristique depuis la BD grace au model
            // on les affiches sous le formulaire prè rempli grace a la vue
            $projet = $this->model->getProjectByCode();
            require "./view/projet/action/update/edit.php";
        } else // Rediriger vers la page list
        {
            echo 'Merci de bien sélectionner un projet que vous voulez modifier';
            echo " code manquant! ";
            // Lister tout les projets

            $this->list();
        }
    }

    /**
     *  Supprimer un projet
     *  
     *  @param bool $commit vérifie si la query string "commit" exist dans l'url
     *  Exemple : if(isset($_GET["commit"])) : true ? false;
     *  
     *  @return void 
     */
    public function remove(bool $commit)
    {
        // Si $commit && !empty(params)  vaut vrai Alors 
        if ($commit && !empty($_GET['code'])) {
            // Récupération des attributs métiers
            $code = $_GET["code"];

            // Mise à jour du modéle
            $this->model->setCode($code);

            // suppression dans la DB
            $this->model->remove();

            // Afficher la page suppression confirmée 
            require_once "./view/projet/action/delete/remove-confirmed.php";
        } elseif (isset($_GET["code"]) && !empty($_GET['code'])) // Sinon si param existe  && param n'est pas vide
        {
            // Recupération de l'attribut
            $code = $_GET["code"];

            // Mise a jour du modéle
            $this->model->setCode($code);
            // Recupérér les caractéristiques depuis la DB grace au model
            $projet = $this->model->getProjectByCode();

            // Afficher la page proposer une suppression
            require_once "./view/projet/action/delete/remove.php";
        } else {
            echo " code manquant! ";
            // Lister tout les projets

            $this->list();
        }
    }
    /**
     *  Afficher la Liste des projets
     * 
     * @return void
     * */
    public function list()
    {
        $projets = $this->model->getAllProjects();

        require_once "./view/projet/action/read/list.php";
        // echo "Controller : Lister les projet<br>";
    }
}
