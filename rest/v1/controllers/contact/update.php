<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);
$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    checkPayload($data);
    $contact->contact_aid = $_GET['contactid'];
    $contact->contact_title = checkIndex($data, "contact_title");
    $contact->contact_image = checkIndex($data, "contact_image");
    $contact->contact_category = checkIndex($data, "contact_category");
    $contact->contact_description = checkIndex($data, "contact_description");
    $contact->contact_publish_date = checkIndex($data, "contact_publish_date");
    $contact->contact_datetime = date("Y-m-d H:i:s");
    
    checkId($contact->contact_aid);
    // $contact_name_old = checkIndex($data, "contact_name_old");
    // compareName($contact, $contact_name_old, $contact->contact_name);
    $query = checkUpdate($contact);
    returnSuccess($contact, "contact", $query);
}

checkEndpoint();