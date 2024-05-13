<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Footer.php';

$conn = null;
$conn = checkDbConnection();

$footer = new Footer($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("footerid", $_GET)) {

        checkPayload($data);
        $footer->footer_aid = $_GET['footerid'];
        $footer->footer_is_active = trim($data["isActive"]);
        $footer->footer_datetime = date("Y-m-d H:i:s");
        checkId($footer->footer_aid);
        $query = checkActive($footer);
        http_response_code(200);
        returnSuccess($footer, "footer", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();