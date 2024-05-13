<?php
$conn = null;
$conn = checkDbConnection();
$header = new Header($conn);
if (array_key_exists("headerid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$header->header_image = checkIndex($data, "header_image");
$header->header_is_active = 1;
$header->header_publish_date = checkIndex($data, "header_publish_date");
$header->header_nav_1 = checkIndex($data, "header_nav_1");
$header->header_nav_2 = checkIndex($data, "header_nav_2");
$header->header_nav_3 = checkIndex($data, "header_nav_3");
$header->header_nav_4 = checkIndex($data, "header_nav_4");
$header->header_lang_1 = checkIndex($data, "header_lang_1");
$header->header_lang_2 = checkIndex($data, "header_lang_2");
$header->header_lang_3 = checkIndex($data, "header_lang_3");
$header->header_created = date("Y-m-d H:i:s");
$header->header_datetime = date("Y-m-d H:i:s");

// isNameExist($header, $header->header_title);

$query = checkCreate($header);
returnSuccess($header, "header", $query);