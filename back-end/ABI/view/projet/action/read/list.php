<section class="p-3 mb-2 bg-info text-dark">
    <h2>Liste des projets</h2>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Code</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $count = 1;
            foreach ((array)$projets as $projet) {
            ?>
                <tr>
                    <th scope="row"><?= $count++ ?></th>
                    <td><?= $projet["nom"] ?></td>
                    <td><?= $projet["code"] ?></td>
                    <td class="actions">
                        <a href="index.php?entity=projet&action=edit&code=<?= $projet["code"] ?>" class="btn btn-warning">Edit</a>
                        <a href="index.php?entity=projet&action=remove&code=<?= $projet["code"] ?>" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            <?php
            }
            ?>
        </tbody>
    </table>
    <a href="index.php?entity=projet&action=add" class="btn btn-primary">Ajouter un Projet</a>
</section>