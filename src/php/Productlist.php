<?php

require_once('config.php');

    $user_id = $_GET['user_id'];

    $sql = "SELECT * from commodity_car WHERE user_id = ' $user_id'";

    $result = mysqli_query($conn,$sql);


    while ($data = mysqli_fetch_array($result)) {
        // $data = mysqli_fetch_array($result);
  
    // echo json_encode($data);
  
    // echo 1;
    $obj = array();
  
    $obj["user_id"] = $data["user_id"];
    $obj["Commodity_name"] = $data["Commodity_name"];
    $obj["Commodity_price"] = $data["Commodity_prise"];
    $obj["Commodity_num"] = $data["Commodity_num"];

  
    $list[] = $obj;
  }

    $res = array();

    $res['code']=1;
    $res['data']=$list;
    


  
  echo json_encode($res);

