document.getElementById("convertir").addEventListener("click", () => {

    const result = document.getElementById("result");
    const temp = parseFloat(document.getElementById("temp").value.trim());
    const humid = parseFloat(document.getElementById("humid").value.trim());
    
    if (isNaN(temp) || isNaN(humid)) {
        result.style.color = "red";
        result.textContent = "Veuillez remplir toutes les données correctement.";
        return;
    }

    const a = 17.27
    const b = 237.7
    
    const alpha = ((a * temp)/(b + temp) + Math.log(humid/100))
    const rosee = (b * alpha)/(a - alpha)
    
    const hauteur = 125 * (temp - rosee);

    result.style.color = "#0a4";
    result.textContent = `Température du point de rosée : ${rosee.toFixed(2)} °C\nHauteur de la base des nuages :  ${hauteur.toFixed(0)} mètres`;
});



