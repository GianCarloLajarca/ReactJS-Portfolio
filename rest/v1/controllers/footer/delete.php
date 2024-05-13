<?php
$conn = null;
$conn = checkDbConnection();
$footer = new Footer($conn);

$error = [];
$returnData = [];
if (array_key_exists("footerid", $_GET)) {
    $footer->footer_aid = $_GET['footerid'];
    checkId($footer->footer_aid);

    $query = checkDelete($footer);
    returnSuccess($footer, "footer", $query);
}

checkEndpoint();