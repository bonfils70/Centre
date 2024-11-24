  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNUANwOsh8nvVPa89zsDP-lLh_BPRBLwk",
    authDomain: "centre-de-sante-72053.firebaseapp.com",
    databaseURL: "https://centre-de-sante-72053-default-rtdb.firebaseio.com",
    projectId: "centre-de-sante-72053",
    storageBucket: "centre-de-sante-72053.firebasestorage.app",
    messagingSenderId: "571229659210",
    appId: "1:571229659210:web:52541070e939273f7346b3",
    measurementId: "G-ZQZTPG8PR2"
  };

 // Initialiser Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Fonction pour ajouter des données
function writeUserData(userId, name, objet, contact, message) {
    set(ref(database, 'users/' + userId), {
        name: name,
        objet: objet,
        contact: contact,
        message: message
    })
    .then(() => {
        alert("Données ajoutées avec succès !");

        // Efface le formulaire après l'envoi
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error("Erreur lors de l'ajout des données : ", error);
    });
}

// Écouter le formulaire
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const name = document.getElementById("name").value;
    const objet = document.getElementById("objet").value;
    const contact = document.getElementById("contact").value;
    const message = document.getElementById("message").value;

    if (name && objet && contact && message) {
        // Générer un ID utilisateur aléatoire
        const userId = Date.now(); // Utilise un timestamp comme ID unique

        // Appeler la fonction pour écrire dans Firebase
        writeUserData(userId, name, objet, contact, message);
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});

// 79909070