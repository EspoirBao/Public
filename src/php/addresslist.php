<?php

require_once('config.php');

$user_name =$_GET['user_name'];

$sql = "SELECT * FROM address WHERE user_name='$user_name'";

$result = mysqli_query($conn, $sql);

while ($data = mysqli_fetch_array($result)) {
    
$obj = array();

$obj["user_name"] = $data["user_name"];
$obj["address"] = $data["address"];
$obj["telephone"] = $data["telephone"];
$obj["id"] = $data["id"];
$obj["name"] = $data["name"];



$list[] = $obj;
}
$res = array();

$res['code']=1;
$res['data']=$list;


echo json_encode($res);