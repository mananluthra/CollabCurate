<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','collabcurate');

// get the post records
$txtUsername = $_POST['username'];
$txtAge = $_POST['age'];
$txtCategory = $_POST['category'];

// database insert SQL code
$sql = "INSERT INTO `signups` (`username`, `age`, `category`) VALUES ('$txtUsername', '$txtAge', '$txtCategory')";

// insert in database
$rs = mysqli_query($con, $sql);


?>
