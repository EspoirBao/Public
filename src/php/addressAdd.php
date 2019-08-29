<?php

require_once('config.php');

$user_name = $_GET["user_name"];
 $address = $_GET["address"];
 $telephone =  $_GET["telephone"];
 
$sql="INSERT INTO address (user_name,address,telephone)VALUES('$user_name','$address','$telephone')"
 
mysqli_query($conn,$sql);

$count = mysqli_affected_rows($conn);


if($count){
        
    $obj = array();

$obj["code"] = 1;
$obj["msg"] = '注册成功';
$obj["date"] = true;

echo json_encode($obj);




