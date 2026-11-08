<?php

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'));

$response = array(
    "status" => "success",
    "message" => "Welcome, " . $data->name . "!"
);

echo json_encode($response);

$jsonData;
