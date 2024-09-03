<?php

$mysqli = new mysqli("localhost", "root", "password", "contactform");

echo $mysqli->host_info . "\n";

$mysqli = new mysqli("127.0.0.1", "root", "password", "contactform", 3306);

echo $mysqli->host_info . "\n";