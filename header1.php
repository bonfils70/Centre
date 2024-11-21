<?php
session_start();
$patientId = isset($_SESSION['patient_id']) ? $_SESSION['patient_id'] : 0;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hôpital de Sages-Femmes - Client</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <nav>
        <ul class="menu">            
            <li><a href="accueil.php">Accueil</a></li>
            <li><a href="noservices.php">Nos Services</a></li>
            <li><a href="pubClient.php">Nos Publications</a></li>
            <li><a href="contact.php">Contactez-nous</a></li>
            <li><a href="liste_rendez_vous_client.php?idPat=<?php echo $patientId; ?>">Voir mes rendez-vous</a></li>
        </ul>
    </nav>
</div>
</body>
</html>