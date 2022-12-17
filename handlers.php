<?php
$user_email = htmlspecialchars($_POST["useremail"]);
echo "Привет, " . $user_email . "<br>";

$user_phone =  htmlspecialchars($_POST["userphone"]);
echo "Ваш телефон: <b>" . $user_phone . "</b>";

$token = "5986116917:AAETyy7daMmeoiVmZCUvy4WOpCEYY8fTS8c";
$chat_id = "-726253370";

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$user_email}&parse_mode=html", "r");

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$user_phone}&parse_mode=html", "r");

if ($sendToTelegram) {
  echo "Succes";
} else {
  echo "Error";
}