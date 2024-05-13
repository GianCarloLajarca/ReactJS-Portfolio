<?php
$conn = null;
$conn = checkDbConnection();
$footer = new Footer($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($footer);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();