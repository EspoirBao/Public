<?php
require_once('config.php');

$id = $_GET["id"];
$commodity_num=$_GET["commodity_num"];


$sql = "UPDATE commodity_car SET commodity_num = '$commodity_num' WHERE id = '$id'";

mysqli_query($conn,$sql);

$count = mysqli_affected_rows($conn);

$obj = array();

if($count > 0){
    $obj["code"]=1;
    $obj["msg"]='添加成功'；
}else{
    $obj["code"] = 0;
    $obj["msg"] = '添加失败'；
}
echo json_encode($obj); 