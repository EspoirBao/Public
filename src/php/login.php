<?php
 require_once('config.php')

 $username = $_GET["username"];
 $password = $_GET["password"];

 
  $sql = "select count(*) from userinfo WHERE username = '$username'";

  $result = mysqli_query($conn, $sql);


  $data = mysqli_fetch_array($result);



  $obj = array();

  $obj["code"] = 0;
  $obj["msg"] = '用户不存在或密码错误';
  $obj["data"] = false;


  if($data["0"] > 0) { 
    $sql = "SELECT * from userinfo WHERE username = '$username'";

    $result = mysqli_query($conn, $sql);

    $data = mysqli_fetch_array($result);

 

    if($data["password"] == $password) {

      $obj["code"] = 1;
      $obj["msg"] = '登录成功';
      $obj["data"] = true;

    };


  echo json_encode($obj);

