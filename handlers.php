<?php
$user_email = htmlspecialchars($_POST["useremail"]);
// echo "Привет, " . $user_email . "<br>";

$user_phone =  htmlspecialchars($_POST["userphone"]);
// echo "Ваш телефон: <b>" . $user_phone . "</b>";

$token = "5986116917:AAETyy7daMmeoiVmZCUvy4WOpCEYY8fTS8c";
$chat_id = "-726253370";

$formData = array(
  "Клиент: " => $user_email,
  "Телефон: " => $user_phone
);

foreach($formData as $key => $value) {
  $text .= $key . "<b>" . urlencode($value) . "</b>" . "%0A" ;
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");


if ($sendToTelegram) {
  echo "Succes";
} else {
  echo "Error";
}