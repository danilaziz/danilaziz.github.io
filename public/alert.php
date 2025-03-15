<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alert</title>
  <link rel="stylesheet" href="vendors/bootstrap/css/bootstrap.min.css">
  <style>
    .alert-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f8f9fa;
    }

    .alert-box {
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="container alert-container">
    <div class="alert-box">
      <div class="alert alert-success" role="alert">
        Pesan sudah terkirim!
      </div>
      <a href="index.php" class="btn btn-primary">Kembali ke Dashboard</a>
    </div>
  </div>
  <script src="vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>