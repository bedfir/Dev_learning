<?php



// Crédentials SQL

const DB_NAME = "voitures";

const DB_USER = "root";

const DB_PWD = "";

const SERVER_NAME = "localhost";


// Propriétaire demandé
if (isset($_GET['proprio'])) {
    $proprio = $_GET['proprio'];
} else {
    echo "Demande incorrecte, manque 'propriétaire'";
    die();
}


// Formatage DSN

$dsn = "mysql:host=" . SERVER_NAME . ";dbname=" . DB_NAME;



// Options de connexion

$options = [

    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'

];

//  Préparation de la réquête SQL
$sql = "SELECT * FROM voitures WHERE proprietaire = ?";

// Céation de la connexion PDO

try {

    // Création de la connexion

    $conn = new PDO($dsn, DB_USER, DB_PWD, $options);



    // Forcer les exceptions PDO

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Execution de la requête SQL
    $pdo_statement = $conn->query($sql);

    // Préparation de la requête sql
    $pdo_statement = $conn->prepare($sql);

    if ($pdo_statement != false) {

        // Liage  des paramètres
        if ($pdo_statement->bindParam(1, $proprio)) {
            // Execution de la requpete SQL
            if ($pdo_statement->execute()) {
                // C'est OK
                echo "Requête réussi<br>";
            } else {
                // C'est KO
                echo "Requête KO<br>";
            }
        } else {
            echo "Erreur de liage de paramètre";
        }
    } else {
        // Cas erreur
        echo "Préparation de la Requête KO<br>";
    }
} catch (PDOException $e) {

    echo "Rien ne va plus : " . $e->getMessage();

    die();
}

// Exploitation le resultset
if ($pdo_statement->rowCount() > 0) {
    foreach ($pdo_statement as $row) {


        echo 'immatriculation = ' . $row['immatriculation'];
        echo '&nbsp|&nbsp';
        echo 'proprietaire = ' . $row['proprietaire'];
        echo '<br>';
    }
} else {
    echo "Propriétaire introuvable";
}
