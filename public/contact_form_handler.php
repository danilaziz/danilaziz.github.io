<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio_website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari form
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$device_info = isset($_POST['device_info']) ? $_POST['device_info'] : '';
$location = isset($_POST['location']) ? $_POST['location'] : '';

// Debugging: Log data yang diterima
error_log("Name: $name");
error_log("Email: $email");
error_log("Message: $message");
error_log("Device Info: $device_info");
error_log("Location: $location");

// Masukkan data ke database
$sql = "INSERT INTO contacts (name, email, message, device_info, location) VALUES ('$name', '$email', '$message', '$device_info', '$location')";

if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Tengkiyuuu Gesszzz 😉😘😘!');
          window.location.href = 'index.php';
        </script>";
} else {
  error_log("Error: " . $conn->error);
  echo "<script>
          alert('Terjadi kesalahan: " . $conn->error . "');
          window.location.href = 'index.php';
        </script>";
}

$conn->close();
