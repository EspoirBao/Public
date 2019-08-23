<?php
require_once('config.php');

$username = $_GET["username"];
 $password = $_GET["password"];
 $telephone =  $_GET["telephone"];
 $mail =$_GET["mail"]

 $sql = "SELECT COUNT(*)FROM userinfo WHERE username = '$username'";

 $result = mysqli_query($conn,$sql);

 $data = mysqli_fetch_array($result);

// echo json_encode($data["0"]);

if($data["0"] >0){
    $obj = array();

    $obj["code"] = 0;    
    $obj["msg"] = '用户已存在';
    $obj["date"] = false;

    echo json_encode($obj);
}else{


    // $sql ="INSERT TO userinfo(username,PASSWORD,telephone) VALUES ('$username','$password','$telephone')"

    $sql="INSERT INTO userinfo(username,password,telephone,mail) VALUES ('$username','$password','$telephone','$mail')";

    mysqli_query($conn,$sql);

    $count = mysqli_affected_rows($conn);

    // echo $count;

    if($count){
        
        $obj = array();

    $obj["code"] = 1;
    $obj["msg"] = '注册成功';
    $obj["date"] = true;

    echo json_encode($obj);
    }



}