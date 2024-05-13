<?php
$conn = null;
$conn = checkDbConnection();
$header = new Header($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($header);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();