<?php

class Individu
{
    // property declaration
    private $nom;
    private $prenom;
    private $age;
    private $genre;
    private $langue_parlees = array();

    // method declaration

    function __construct(string $nom, string $prenom, int $age, string $genre, array $langue_parlees)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
        $this->genre = $genre;
        $this->langue_parlees = $langue_parlees;
    }
    // Retourner le nom
    public function getNom()
    {
        return $this->nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getGenre()
    {
        return $this->genre;
    }

    public function celebrerAnniversaire()
    {
        $this->age++;
    }

    public function apprendreUneLangue($langue)
    {
        $this->langue_parlees[] = $langue;
    }

    public function getLangues()
    {
        return $this->langue_parlees;
    }
}


$mon_obj = new Individu("BEDOUI", "Firas", 28, "Homme", array("Français", "Anlgais", "Arabe"));

var_dump($mon_obj);

echo "<pre>" . var_dump($mon_obj) . "</pre>";
