<?php

Class Footer {
    public $footer_aid;
    public $footer_image;
    public $footer_is_active;
    public $footer_publish_date;
    public $footer_link_1;
    public $footer_link_2;
    public $footer_link_3;
    public $footer_link_4;
    public $footer_phone;
    public $footer_email;
    public $footer_address;
    public $footer_created;
    public $footer_search;
    public $footer_datetime;

    public $connection;
    public $lastInsertedId;
    public $tblFooter;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblFooter = "footer";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblFooter} ";
             $sql .= "footer_image, ";
             $sql .= "footer_is_active, ";
             $sql .= "footer_publish_date, ";
             $sql .= "footer_link_1, ";
             $sql .= "footer_link_2, ";
             $sql .= "footer_link_3, ";
             $sql .= "footer_link_4, ";
             $sql .= "footer_phone, ";
             $sql .= "footer_email, ";
             $sql .= "footer_address, ";
             $sql .= "footer_created, ";
             $sql .= "footer_datetime ) values ( ";
             $sql .= ":footer_image, ";
             $sql .= ":footer_is_active, ";
             $sql .= ":footer_publish_date, ";
             $sql .= ":footer_link_1, ";
             $sql .= ":footer_link_2, ";
             $sql .= ":footer_link_3, ";
             $sql .= ":footer_link_4, ";
             $sql .= ":footer_phone, ";
             $sql .= ":footer_email, ";
             $sql .= ":footer_address, ";
             $sql .= ":footer_created, ";
             $sql .= ":footer_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "footer_image" => $this->footer_image,
                "footer_is_active" => $this->footer_is_active,
                "footer_publish_date" => $this->footer_publish_date,
                "footer_link_1" => $this->footer_link_1,
                "footer_link_2" => $this->footer_link_2,
                "footer_link_3" => $this->footer_link_3,
                "footer_link_4" => $this->footer_link_4,
                "footer_phone" => $this->footer_phone,
                "footer_email" => $this->footer_email,
                "footer_address" => $this->footer_address,
                "footer_created" => $this->footer_created,
                "footer_datetime" => $this->footer_datetime,
             ]);
             $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblFooter} ";
            $sql .= "order by footer_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblFooter} ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_image = :footer_image, ";
            $sql .= "footer_publish_date = :footer_publish_date, ";
            $sql .= "footer_link_1 = :footer_link_1, ";
            $sql .= "footer_link_2 = :footer_link_2, ";
            $sql .= "footer_link_3 = :footer_link_3, ";
            $sql .= "footer_link_4 = :footer_link_4, ";
            $sql .= "footer_phone = :footer_phone, ";
            $sql .= "footer_email = :footer_email, ";
            $sql .= "footer_address = :footer_address, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid  = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_image" => $this->footer_image,
                "footer_publish_date" => $this->footer_publish_date,
                "footer_link_1" => $this->footer_link_1,
                "footer_link_2" => $this->footer_link_2,
                "footer_link_3" => $this->footer_link_3,
                "footer_link_4" => $this->footer_link_4,
                "footer_phone" => $this->footer_phone,
                "footer_email" => $this->footer_email,
                "footer_address" => $this->footer_address,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_is_active = :footer_is_active, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid  = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_is_active" => $this->footer_is_active,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblFooter} ";
            $sql .= "where footer_title like :footer_title ";
            $sql .= "order by footer_is_active desc, ";
            $sql .= "footer_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_title" => "%{$this->footer_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}