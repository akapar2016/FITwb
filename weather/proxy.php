<?php
header("Access-Control_Allow_Origin: https://www.aviationweather.gov");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');    // cache for 1 day

$c = $_GET['a'];
$url = 'https://www.aviationweather.gov/adds/dataserver_current/'.
        'httpparam?dataSource=metars&requestType=retrieve&format' .
        '=xml&stationString='.$c.'&hoursBeforeNow=1.5';

$handle = fopen($url, "r");


if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }

    fclose($handle);

}

?>