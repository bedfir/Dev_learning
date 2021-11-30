<section class="p-3 mb-2 bg-info text-dark">
    <h3>Modifier le projet</h3>
    <form>
        <input type="hidden" name="entity" value="projet">
        <input type="hidden" name="action" value="edit">
        <input type="hidden" name="commit">
        <div class="mb-3">
            <label for="exampleInputCode" class="form-label">Code</label>
            <input type="text" class="form-control" readonly="readonly" name="code" value="<?= $projet["code"] ?>" id="exampleInputCode" aria-describedby="codeHelp">
            <div id="codeHelp" class="form-text"> Voici le Code a modifier <?= $projet["code"] ?></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputNom" class="form-label">Nom</label>
            <input type="text" class="form-control" name="nom" id="exampleInputNom" aria-describedby="nomHelp">
            <div id="nomHelp" class="form-text"> Voici le Nom a modifier <?= $projet["nom"] ?></div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>