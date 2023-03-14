<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$datapelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$pelanggan = $datapelanggan['pelanggan'];
$alamat = $datapelanggan['alamat'];
$telp = $datapelanggan['telp'];


if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {

	$sql = "INSERT INTO tblpelanggan VALUES('', '$pelanggan', '$alamat', '$telp')";

	if (mysqli_query($connect, $sql)) {
		echo 'Data berhasil ditambahkan';
	} else {
		echo 'Gagal menambahkan data';
	}
} else {
	echo 'Tidak ada data untuk ditambahkan';
}