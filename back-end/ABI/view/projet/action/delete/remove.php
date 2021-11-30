<section class="p-3 mb-2 bg-warning text-dark">

    <h3>Suppression</h3>
    <p>Vous allez supprimer le projet ==> Code : <?= $projet["code"] . " Nom : " . $projet["nom"] ?> </p>
    <a href="index.php?entity=projet&action=remove&code=<?= $projet["code"] ?>&commit" class="btn btn-danger">Confirmer la Suppression</a>
</section>