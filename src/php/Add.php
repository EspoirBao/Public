<?php

require_once('config.php');

$user_id = $_GET["user_id"];
$commodity_id =$_GET["commodity_id"];
$commodity_price =$_GET["commodity_price"];
$commodity_num =$_GET["commodity_num"];



    // $sql ="INSERT TO userinfo(username,PASSWORD,telephone) VALUES ('$username','$password','$telephone')"

    $sql="INSERT INTO commodity_car(user_id,commodity_id,commodity_price,commodity_num) VALUES ('$user_id','$commodity_id','$commodity_price','$commodity_num')";

    mysqli_query($conn,$sql);

    $count = mysqli_affected_rows($conn);

    // echo $count;

    if($count){
        
        $obj = array();

    $obj["code"] = 1;
    $obj["msg"] = '添加成功';
    $obj["date"] = true;

    }else{
    $obj["code"] = 0;
    $obj["msg"] = '添加失败';
    $obj["date"] = false;
    }




    echo json_encode($obj);



