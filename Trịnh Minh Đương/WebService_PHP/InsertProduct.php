<?php
    include 'DBConfig.php';
    $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $masp= $obj["code"];
    $tensp = $obj["name"];
    $soluong =$obj["quantity"];
    $Sql_Query = "INSERT INTO Product (`code` ,  `name` ,  `quantity` )  VALUES ('$masp','$tensp','$soluong')";

    if(mysqli_query($con,$Sql_Query)){
        $MSG = 'Successfully' ;

        $json = json_encode($MSG);
        echo $json ; 
    }
    else{
        echo 'Wrong';
    }
    mysqli_close($con);
?>