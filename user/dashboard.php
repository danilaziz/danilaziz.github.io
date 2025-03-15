<?php
include 'check_login.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="../user/vendors/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="../user/vendors/boxicons/css/boxicons.min.css" />
  <link rel="stylesheet" href="../user/styles/styles.css">
</head>

<body>
  <div class="container-fluid dashboard-container">
    <div class="sidebar">
      <a href="#">
        <i class='bx bxs-dashboard fs-4'></i> Dashboard
      </a>
      <a href="settings.php">
        <i class='bx bxs-cog fs-4'></i> Settings
      </a>
    </div>
    <div class="content">
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light mb-4">
          <div class="container-fluid">
            <div class="card-header">
              Selamat Datang <?php echo $_SESSION['username']; ?>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link btn btn-danger logout-btn" href="logout.php">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class='bx bxs-user'></i>
              <?php
              $conn = new mysqli("localhost", "root", "", "portfolio_website");
              if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
              }
              $result = $conn->query("SELECT COUNT(*) AS user_count FROM users");
              $row = $result->fetch_assoc();
              echo "<p>" . $row['user_count'] . "<br> Admin</p>";
              ?>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class='bx bxs-contact'></i>
              <?php
              $result = $conn->query("SELECT COUNT(*) AS contact_count FROM contacts");
              $row = $result->fetch_assoc();
              echo "<p>" . $row['contact_count'] . "<br> Pesan</p>";
              ?>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <i class='bx bxs-user-pin'></i>
              <?php
              $result = $conn->query("SELECT COUNT(*) AS contact_count FROM contacts");
              $row = $result->fetch_assoc();
              echo "<p>" . $row['contact_count'] . "<br> Selamat Datang</p>";
              ?>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              Pesan
            </div>
            <div class="card-body table-container">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Device Info</th>
                    <th>Location</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                  $result = $conn->query("SELECT * FROM contacts");
                  while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['name'] . "</td>";
                    echo "<td>" . $row['email'] . "</td>";
                    echo "<td>" . $row['message'] . "</td>";
                    echo "<td>" . $row['device_info'] . "</td>";
                    echo "<td>" . $row['location'] . "</td>";
                    echo "<td>" . $row['created_at'] . "</td>";
                    echo "</tr>";
                  }
                  ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="../vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>

</html>