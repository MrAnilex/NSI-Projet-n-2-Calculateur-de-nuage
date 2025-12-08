document.getElementById("convertir").addEventListener("click", () => {

    const devise = document.getElementById("devise").value.trim().toUpperCase();
    const newDevise = document.getElementById("newDevise").value.trim().toUpperCase();
    const coef = parseFloat(document.getElementById("coef").value);
    const somme = parseFloat(document.getElementById("somme").value);
    const result = document.getElementById("resultat");

    if (!devise || !newDevise || isNaN(coef) || isNaN(somme)) {
        result.style.color = "red";
        result.textContent = "Veuillez remplir toutes les données correctement.";
        return;
    }

    const montant = coef * somme;

    result.style.color = "#0a4";
    result.textContent =
        `${somme.toFixed(2)} ${devise} valent ${montant.toFixed(2)} ${newDevise}`;
});
