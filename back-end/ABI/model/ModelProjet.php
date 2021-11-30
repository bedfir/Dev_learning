<?php
require_once "./utils/PDOutils.php";

/**
 *  ModelProjet
 *  Encapsuler les attributs de l'entité métier et les méthodes POUR communiquer entre DB et controller
 *  
 *  @var class
 */
class ModelProjet
{

    /**
     * Identifiant unique DB
     *
     * @var string
     */
    private $id;


    /**
     * Numéro code
     *
     * @var string
     */
    private $code;


    /**
     * Propriétaire
     *
     * @var string
     */
    private $nom;

    // Getters
    /**
     * Getters id
     *
     * @return string
     */
    public function getId(): int
    {
        return $this->id;
    }
    /**
     * Getters Code
     *
     * @return string
     */
    public function getCode(): string
    {
        return $this->code;
    }
    /**
     * Getters Nom
     *
     * @return string
     */
    public function getNom(): string
    {
        return $this->nom;
    }

    // Setters

    public function setId(int $id)
    {
        $this->id = $id;
    }
    public function setCode(string $code)
    {
        $this->code = $code;
    }
    public function setNom(string $nom)
    {
        $this->nom = $nom;
    }

    //--------- Methode du CRUD

    // Create
    /**
     *  Ajout des attributs dans la BD
     * 
     * @return null
     */
    public function add()
    {
        // Saisir la requête SQL
        $prepared_sql = "INSERT INTO projets (code, nom) VALUE (?, ?)";
        // Envoyer les paramètres de la rêquete 
        $array_value =  [$this->code, $this->nom];
        // return NULL, pas de reseult set
        return PDOUtils::query($prepared_sql, $array_value, false);
    }


    // Read
    /**
     * lire tout les projets
     * @return array|null tableaux associatif des attributs de projet
     * si il n y a pas de projet on renvoie NULL 
     */
    public function getAllProjects()
    {
        // Saisir la requête SQL
        $prepared_sql = "SELECT id, code, nom FROM projets";
        // Envoyer les paramètres de la rêquete 
        $array_value = [];
        // Return reseult set de tout les projet | NULL
        return PDOUtils::query($prepared_sql, $array_value, true);
    }

    /**
     * Chercher un projet par son code
     * @return array|null tableaux associatif des attributs de projet
     * si il n y a pas de projet on renvoie NULL 
     */
    public function getProjectByCode()
    {
        // Saisir la requête SQL
        $prepared_sql = "SELECT id, code, nom FROM projets WHERE code = ?";
        // Envoyer les paramètres de la rêquete 
        $array_value = [$this->code];
        // Return reseult set d'un seul projet | NULL
        $les_projets = PDOUtils::query($prepared_sql, $array_value, true);
        return $les_projets[0];
    }

    // Update
    /**
     *  Modification des attributs dans la BD
     * 
     * @return null
     */
    public function update()
    {
        // Saisir la requête SQL
        $prepared_sql = "UPDATE projets SET nom = ? WHERE code = ?";
        // Envoyer les paramètres de la rêquete 
        $array_value =  [$this->nom, $this->code];
        // return NULL, pas de reseult set
        return PDOUtils::query($prepared_sql, $array_value, false);
    }

    // Delete
    /**
     *  Supprision des attributs dans la BD
     *  
     * @return null
     */
    public function remove()
    {
        // Saisir la requête SQL
        $prepared_sql = "DELETE FROM projets WHERE code = ?";
        // Envoyer les paramètres de la rêquete 
        $array_value =  [$this->code];
        // return NULL, pas de reseult set
        return PDOUtils::query($prepared_sql, $array_value, false);
    }
}
