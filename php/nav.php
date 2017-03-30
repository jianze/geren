<?php 
	 //连接数据库
 define('HOST','localhost');
 define('USERNAME','root');
 define('POOSWORD','');
 define('SHUKU','gerenzhan');
 $con=@new mysqli(HOST,USERNAME,POOSWORD,SHUKU);
// var_dump($con);
 if($con->connect_error){
     echo "数据连接不成功";
     exit();
 } ;
 $con->set_charset('utf8');
//操作数据库
$sql='select * from navarr';
$rul=$con->query($sql);
$cul=$rul->fetch_all(MYSQLI_ASSOC);

echo json_encode($cul);
 ?>