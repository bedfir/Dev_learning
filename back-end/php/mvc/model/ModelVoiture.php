<?php
require_once "./utils/PDOutils.php";
class ModelVoiture
{
    # Identifiant unique DB
    private $id;

    // Numéro immatriculation
    private $immatriculation;

    // Propriétaire
    private $proprietaire;

    // Getters
    public function getId(): int
    {
        return $this->id;
    }
    public function getImmatriculation(): string
    {
        return $this->immatriculation;
    }
    public function getPropriétaire(): string
    {
        return $this->proprietaire;
    }

    // Setters
    public function setId(int $id)
    {
        $this->id = $id;
    }
    public function setImmatriculation(string $immatriculation)
    {
        $this->immatriculation = $immatriculation;
    }
    public function setPropriétaire(string $proprietaire)
    {
        $this->proprietaire = $proprietaire;
    }

    // Methode du CRUD

    public function getAllVoitures()
    {
        $prepared_sql = "SELECT immatriculation, proprietaire FROM voitures";
        $array_value = [];

        return PDOUtils::query($prepared_sql, $array_value, true);
    }

    public function add()
    {
        $prepared_sql = "INSERT INTO voitures (immatriculation, proprietaire) VALUE (?, ?)";
        $array_value =  [$this->immatriculation, $this->proprietaire];

        return PDOUtils::query($prepared_sql, $array_value, false);
        // echo "J'ajoute dans la DB la voiture : " . $this->immatriculation . " " . $this->proprietaire;
    }
}
