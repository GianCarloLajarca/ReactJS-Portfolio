<?php
$conn = null;
$conn = checkDbConnection();
$header = new Header($conn);
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
    checkPayload($data);
    $header->header_aid = $_GET['headerid'];
    $header->header_image = checkIndex($data, "header_image");
    $header->header_nav_1 = checkIndex($data, "header_nav_1");
    $header->header_nav_2 = checkIndex($data, "header_nav_2");
    $header->header_nav_3 = checkIndex($data, "header_nav_3");
    $header->header_nav_4 = checkIndex($data, "header_nav_4");
    $header->header_lang_1 = checkIndex($data, "header_lang_1");
    $header->header_lang_2 = checkIndex($data, "header_lang_2");
    $header->header_lang_3 = checkIndex($data, "header_lang_3");
    $header->header_publish_date = checkIndex($data, "header_publish_date");
    $header->header_datetime = date("Y-m-d H:i:s");
    
    checkId($header->header_aid);
    // $header_name_old = checkIndex($data, "header_name_old");
    // compareName($header, $header_name_old, $header->header_name);
    $query = checkUpdate($header);
    returnSuccess($header, "header", $query);
}

checkEndpoint();