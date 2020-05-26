<?php
  // Generate timestamp.
  $today = getdate();
  $hours = $today[hours];
  $minutes = $today[minutes];
  $seconds = $today[seconds];
  $d = $hours.':'.$minutes.':'.$seconds;
  $date = array('hours' => $hours, 'minutes' => $minutes,'seconds' => $seconds, );

  $json = json_encode($date);

  $tab= array('"Il est : '.$d.'", ', $json);
  echo $tab[0],$tab[1];
  //return $tab;
?>