<?php

<?php

require_once 'config.php';

$key = $_GET['key'];

$sql = "SELECT * FROM commodity_list WHERE Commodity_name LIKE '%$key%'";

$result = mysqli_query($conn, $sql);

$list = array();

while ($data = mysqli_fetch_array($result)) {

    $res = array();
    $res['commodity_id'] = $data['commodity_id'];
    $res['commodity_img'] = $data['commodity_img'];
    $res['commodity_name'] = $data['commodity_name'];
    $res['commodity_price'] = $data['commodity_price'];
    $list[] = $res;
}

$obj = array();

$obj['code'] = 1;
$obj['msg'] = '成功';
$obj['data'] = $list;

echo json_encode($obj);