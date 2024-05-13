<?php
$conn = null;
$conn = checkDbConnection();
$header = new Header($conn);

$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
    $header->header_aid = $_GET['headerid'];
    checkId($header->header_aid);

    $query = checkDelete($header);
    returnSuccess($header, "header", $query);
}

checkEndpoint();