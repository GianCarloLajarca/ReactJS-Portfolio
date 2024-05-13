<?php
$conn = null;
$conn = checkDbConnection();
$contact = new Contact($conn);
if (array_key_exists("contactid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$contact->contact_title = checkIndex($data, "contact_title");
$contact->contact_paragpraph = checkIndex($data, "contact_paragpraph");
$contact->contact_is_active = 1;
$contact->contact_publish_date = checkIndex($data, "contact_publish_date");
$contact->contact_phone = checkIndex($data, "contact_phone");
$contact->contact_email = checkIndex($data, "contact_email");
$contact->contact_address = checkIndex($data, "contact_address");
$contact->contact_button = checkIndex($data, "contact_button");
$contact->contact_created = date("Y-m-d H:i:s");
$contact->contact_datetime = date("Y-m-d H:i:s");

// isNameExist($contact, $contact->contact_title);

$query = checkCreate($contact);
returnSuccess($contact, "contact", $query);