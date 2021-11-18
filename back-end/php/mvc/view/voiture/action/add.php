<h2>Ajout d'une voiture</h2>

<form action="index.php">
    <input type="hidden" name="page" value="voiture">
    <input type="hidden" name="action" value="add">
    <input type="hidden" name="confirmed">
    <label>
        immatriculation
        <input type="text" name="immat" id="immat">
    </label>
    <label>
        propriétaire
        <input type="text" name="proprio" id="proprio">
    </label>
    <input type="submit" value="AJOUTER">
</form>