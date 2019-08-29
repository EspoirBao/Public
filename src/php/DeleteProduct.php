<?php

require_once('config.php');


$id = $_GET["id"];

$sql = "DELETE FROM commodity_car WHERE id = '$id'";

mysqli_query($conn, $sql);

$count = mysqli_affected_rows($conn);

$obj = array();

if($count > 0) { // 删除成功
  $obj["code"] = 1;
  $obj["msg"] = "用户删除成功";
} else {
  $obj["code"] = 0;
  $obj["msg"] = "用户删除失败";
}

echo json_encode($obj);

