<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "dbbuah";
    $koneksi = mysqli_connect($host,$user,$password,$db);

    $sql = "SELECT * FROM tblbuah";

    $hasil = mysqli_query($koneksi,$sql);
    
        while ($row = $hasil->fetch_assoc()) {
            $json[] = $row;
        };

    // $result = mysqli_fetch_array($hasil);
    echo json_encode($json, JSON_PRETTY_PRINT);

    // print_r($result);

echo json_encode($data);
// while ($row = $hasil->fetch_assoc()) {
// $json[] = $row;
// }

// $result = mysqli_fetch_array($hasil);

// echo json_encode($json, JSON_PRETTY_PRINT);

// print_r($result);
?>