<?php
/**
 * Web: www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/15/2018
 * Time: 7:58 PM
 */

$treci = $_POST['treci'];
$cetvrti = $_POST['cetvrti'];

//povuci iz baze  za treci i cetvrti
//preformatiraj u json

//ispisi

echo '{"result":"done"}';


//Mail sending function
$subject = 'ene subject';
$to = 'brassta@gmail.com';
$from = "sindja@example.com";

//data
$msg = "Your MSG <br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;

if(mail($to,$subject,$msg,$headers)){
    echo '{"result":"Mail Sent."}';
}
else{
    echo'{"result":"jok care"}';
}
