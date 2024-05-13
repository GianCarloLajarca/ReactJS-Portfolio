<?php
$conn = null;
$conn = checkDbConnection();
$footer = new Footer($conn);
if (array_key_exists("footerid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$footer->footer_image = checkIndex($data, "footer_image");
$footer->footer_copyright = checkIndex($data, "footer_copyright");
$footer->footer_is_active = 1;
$footer->footer_publish_date = checkIndex($data, "footer_publish_date");
$footer->footer_link_1 = checkIndex($data, "footer_link_1");
$footer->footer_link_2 = checkIndex($data, "footer_link_2");
$footer->footer_link_3 = checkIndex($data, "footer_link_3");
$footer->footer_link_4 = checkIndex($data, "footer_link_4");
$footer->footer_phone = checkIndex($data, "footer_phone");
$footer->footer_email = checkIndex($data, "footer_email");
$footer->footer_address = checkIndex($data, "footer_address");
$footer->footer_created = date("Y-m-d H:i:s");
$footer->footer_datetime = date("Y-m-d H:i:s");

// isNameExist($footer, $footer->footer_title);

$query = checkCreate($footer);
returnSuccess($footer, "footer", $query);