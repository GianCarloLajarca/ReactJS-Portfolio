<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Header.php';

$conn = null;
$conn = checkDbConnection();

$header = new Header($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("headerid", $_GET)) {

        checkPayload($data);
        $header->header_aid = $_GET['headerid'];
        $header->header_is_active = trim($data["isActive"]);
        $header->header_datetime = date("Y-m-d H:i:s");
        checkId($header->header_aid);
        $query = checkActive($header);
        http_response_code(200);
        returnSuccess($header, "header", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();