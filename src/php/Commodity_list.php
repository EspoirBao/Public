<?php
  require_once('config.php');

  $page = $_GET['page'];
  $size = $_GET['size'];
  $label = $_GET['label'];
  $order = $_GET['order'];
  $sort = $_GET['sort'];

  $skip=($page -1)*$size;

  
  $sql = "SELECT * from commodity_list WHERE commodity_tag = '$label' ORDER BY $order $sort LIMIT $skip,$size";

  $sql2 = "SELECT count(*) from commodity_list WHERE commodity_tag = '$label'";



 $total= mysqli_fetch_array(mysqli_query($conn, $sql2))

$result = mysqli_query($conn, $sql);


$list = array();

while ($data = mysqli_fetch_array($result)) {
      // $data = mysqli_fetch_array($result);

  // echo json_encode($data);

  // echo 1;
  $obj = array();

  $obj["Commodity_id"] = $data["Commodity_id"];
  $obj["Commodity_img"] = $data["Commodity_img"];
  $obj["Commodity_name"] = $data["Commodity_name"];
  $obj["Commodity_price"] = $data["Commodity_prise"];
 

  $list[] = $obj;
}

$res = array();

$res['code']=1;
$res['data']=$list;
$res['total']=$total['0'];



echo json_encode($res);