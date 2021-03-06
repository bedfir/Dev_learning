<?php


if (isset($_GET['error']) && $_GET['error'] == 'true') {
  header("HTTP/1.0 404 Not Found");
  exit;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script async src="./index.js"></script>
  <link rel="stylesheet" href="style.css">
  <title>formulaire method GET</title>
</head>

<?php

$succes = null;
// Vérification de la présence de paramètres HTTP GET
// https://www.php.net/manual/fr/function.empty.php
if (!empty($_POST)) {
?>

<?php

  // Parsing des paramètres GET
  // https://www.php.net/manual/fr/control-structures.foreach.php
  // foreach ($_POST as $name => $value) {
  //   echo '<p>' . $name . '=' . $value . '</p>';
  // }

  $succes = "Nous avons reçu votre formulaire";
} else {

  // Récupération dynamique de l'URL courante
  // https://stackoverflow.com/questions/6768793/get-the-full-url-in-php
  $form_url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  $succes = null;
}
?>

<?php

// Crédentials SQL
const DB_NAME = "form";
const DB_USER = "root";
const DB_PWD = "";
const SERVER_NAME = "localhost";
$dsn = "mysql:host=" . SERVER_NAME . ";dbname=" . DB_NAME;
$options = [
  PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
];


try {
  $conn = new PDO($dsn, DB_USER, DB_PWD, $options);

  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  if ($succes) {
    // prepare sql and bind parameters
    $stmt = $conn->prepare("INSERT INTO register (fullName, email, position, pwd, gender) 
  VALUES (:fullName, :email, :position, :pwd, :gender)");
    $stmt->bindParam(':fullName', $fullname);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':position', $position);
    $stmt->bindParam(':pwd', $pwd);
    $stmt->bindParam(':gender', $gender);

    // insert a row

    $fullname = $_POST["name"];
    $email = $_POST["email"];
    $position = $_POST["position"];
    $pwd = $_POST["password"];
    $gender = $_POST["gender"];

    $stmt->execute();
  }



  // echo "New records created successfully";
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;

?>


<body>
  <div class="form-body">
    <div class="row">
      <div class="form-holder">
        <div class="form-content">
          <div class="form-items">
            <h3>Register Today</h3>
            <p>Fill in the data below.</p>
            <form class="requires-validation" novalidate method="POST" action="<?php $form_url ?>">

              <div class="col-md-12">
                <input class="form-control" type="text" name="name" placeholder="Full Name" required>
                <div class="valid-feedback">Username field is valid!</div>
                <div class="invalid-feedback">Username field cannot be blank!</div>
              </div>

              <div class="col-md-12">
                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required>
                <div class="valid-feedback">Email field is valid!</div>
                <div class="invalid-feedback">Email field cannot be blank!</div>
              </div>

              <div class="col-md-12">
                <select class="form-select mt-3" name="position" required>
                  <option selected disabled value="">Position</option>
                  <option value="jweb">Junior Web Developer</option>
                  <option value="sweb">Senior Web Developer</option>
                  <option value="pmanager">Project Manager</option>
                </select>
                <div class="valid-feedback">You selected a position!</div>
                <div class="invalid-feedback">Please select a position!</div>
              </div>


              <div class="col-md-12">
                <input class="form-control" type="password" name="password" placeholder="Password" required>
                <div class="valid-feedback">Password field is valid!</div>
                <div class="invalid-feedback">Password field cannot be blank!</div>
              </div>


              <div class="col-md-12 mt-3">
                <label class="mb-3 mr-1" for="gender">Gender: </label>

                <input type="radio" class="btn-check" name="gender" value="male" id="male" autocomplete="off" required>
                <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                <input type="radio" class="btn-check" name="gender" value="female" id="female" autocomplete="off" required>
                <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>

                <input type="radio" class="btn-check" name="gender" value="secret" id="secret" autocomplete="off" required>
                <label class="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                <div class="valid-feedback mv-up">You selected a gender!</div>
                <div class="invalid-feedback mv-up">Please select a gender!</div>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label">I confirm that all data are correct</label>
                <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
              </div>


              <div class="form-button mt-3">
                <button id="submit" type="submit" class="btn btn-primary">Register</button>
              </div>
            </form>
            <?php if ($succes) : ?>
              <div class="alert alert-success mt-3"><?= $succes ?></div>
            <?php endif ?>
          </div>
        </div>
      </div>
    </div>
  </div>


</body>

</html>