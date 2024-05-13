<?php
$conn = null;
$conn = checkDbConnection();
$footer = new Footer($conn);
$error = [];
$returnData = [];
if (array_key_exists("footerid", $_GET)) {
    checkPayload($data);
    $footer->footer_aid = $_GET['footerid'];
    $footer->footer_image = checkIndex($data, "footer_image");
    $footer->footer_copyright = checkIndex($data, "footer_copyright");
    $footer->footer_publish_date = checkIndex($data, "footer_publish_date");
    $footer->footer_link_1 = checkIndex($data, "footer_link_1");
    $footer->footer_link_2 = checkIndex($data, "footer_link_2");
    $footer->footer_link_3 = checkIndex($data, "footer_link_3");
    $footer->footer_link_4 = checkIndex($data, "footer_link_4");
    $footer->footer_phone = checkIndex($data, "footer_phone");
    $footer->footer_email = checkIndex($data, "footer_email");
    $footer->footer_address = checkIndex($data, "footer_address");
    $footer->footer_datetime = date("Y-m-d H:i:s");
    
    checkId($footer->footer_aid);
    // $footer_name_old = checkIndex($data, "footer_name_old");
    // compareName($footer, $footer_name_old, $footer->footer_name);
    $query = checkUpdate($footer);
    returnSuccess($footer, "footer", $query);
}

checkEndpoint();