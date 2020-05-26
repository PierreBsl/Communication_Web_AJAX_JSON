<?php
    $currentHour = getdate();
    $hour = $currentHour['hours'];
    $min = $currentHour['minutes'];
    $sec = $currentHour['seconds'];
    if($min < 10){
        $min = "0".$min;
    }
    $string = "Il est " . $hour . ":" . $min . ":" . $sec;
    $data = array($string,array(
        "hours" => $hour, 
        "minutes" => $min,
        "seconds"=> $sec
    ));
    $json = json_encode($data);
    echo $json;
?>