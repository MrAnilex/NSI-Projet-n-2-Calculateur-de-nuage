document.getElementById("convertir").addEventListener("click", () => {

    const temp = parseFloat(document.getElementById("temp").value.trim());
    const humid = parseFloat(document.getElementById("humid").value.trim());
    
    if (!temp || !humid) {
        result.style.color = "red";
        result.textContent = "Veuillez remplir toutes les données correctement.";
        return;
    }


    const a = 17.27
    const b = 237.7
    
    const alpha = ((a*temp)/(b+temp) +math.log(humid)
    const rosee = (b*alpha)/(a-alpha)
    
    const montant = 125 * (temp-rosse);

    result.style.color = "#0a4";
    result.textContent =
// Il manque le print...
});
