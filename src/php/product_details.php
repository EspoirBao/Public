<?php
 require_once('config.php');

    $id = $_GET['id'];

    $sql = "SELECT * from commodity_list WHERE id = '$id'";

    $result = mysqli_query($conn,$sql);


    while ($data = mysqli_fetch_array($result)) {
        // $data = mysqli_fetch_array($result);
  
    // echo json_encode($data);
  
    // echo 1;
    $obj = array();
  
    $obj["Commodity_id"] = $data["Commodity_id"];
    $obj["Commodity_img"] = $data["Commodity_img"];
    $obj["Commodity_name"] = $data["Commodity_name"];
    $obj["Commodity_price"] = $data["Commodity_prise"];
    $obj["Commodity_Details_L1"] = $data["Commodity_Details_L1"];
    $obj["Commodity_Details_L2"] = $data["Commodity_Details_L2"];
    $obj["Commodity_Details_L3"] = $data["Commodity_Details_L3"];
    $obj["Commodity_Details_L4"] = $data["Commodity_Details_L4"];
   
  
    $list[] = $obj;
  }

    $res = array();

    $res['code']=1;
    $res['data']=$list;
    


  
  echo json_encode($res);
