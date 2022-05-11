var nom = window.prompt("Entrez votre nom");

var prenom = window.prompt("Saisissez votre prenom");

if (window.confirm('Etes-vous un homme ?') == true)
{
    alert("Bonjour Monsieur "+ nom + " " +  prenom + "\nBienvenue sur notre site Web !");
} else { 
    alert("Bonjour Madame " + nom + " " + prenom + " Bienvenue sur notre site Web !");
}