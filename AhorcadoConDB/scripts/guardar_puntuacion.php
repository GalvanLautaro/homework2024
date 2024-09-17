<?php
// Conexión a la base de datos
$servername = "ahorcado";
$username = "root";
$password = "47090107";
$dbname = "Score";

// Obtener datos del formulario y limpiarlos
$nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$puntuacion = filter_var($_POST['puntuacion'], FILTER_SANITIZE_NUMBER_INT);
$fecha = date('Y-m-d H:i:s'); // Formato de fecha estándar

// Preparar e ejecutar la consulta SQL
$sql = "INSERT INTO score (nombre, puntos, fecha) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sis", $nombre, $puntuacion, $fecha);

if ($stmt->execute()) {
    echo "Puntuación guardada correctamente";
} else {
    echo "Error al guardar la puntuación: " . $stmt->error;
    // Registrar el error en un archivo de log
}

$stmt->close();
$conn->close();