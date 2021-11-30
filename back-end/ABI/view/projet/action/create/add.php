<section class="p-3 mb-2 bg-info text-dark">
    <h3>Ajouter un projet</h3>
    <form class="container">
        <input type="hidden" name="entity" value="projet">
        <input type="hidden" name="action" value="add">
        <input type="hidden" name="commit">
        <div class="mb-3">
            <label for="exampleInputCode" class="form-label">Code</label>
            <input type="text" name="code" class="form-control" id="exampleInputCode">
        </div>
        <div class="mb-3">
            <label for="exampleInputNom" class="form-label">Nom</label>
            <input type="text" name="nom" class="form-control" id="exampleInputNom">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>