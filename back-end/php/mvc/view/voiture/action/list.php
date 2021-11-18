<h2>Liste des voitures</h2>
<table>
    <thead>
        <tr>
            <td>Immatriculation</td>
            <td>Propriétaire</td>
        </tr>
    </thead>
    <tbody>
        <?php
        foreach ($voitures as $voiture) {
        ?>
            <tr>
                <td><?= $voiture["immatriculation"] ?></td>
                <td><?= $voiture["proprietaire"] ?></td>
            </tr>
        <?php
        }
        ?>
        <tr>
            <td>BC_TC_152</td>
            <td>Albert</td>
        </tr>
    </tbody>
</table>