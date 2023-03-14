<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$sql = "SELECT * FROM tblpelanggan WHERE idpelanggan = $idpelanggan";
$result = mysqli_query($connect, $sql);
$data = mysqli_fetch_assoc($result);

// var_dump($data);

echo json_encode($data);