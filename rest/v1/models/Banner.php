<?php

Class Banner {
    public $banner_aid;
    public $banner_greet;
    public $banner_image;
    public $banner_firstname;
    public $banner_lastname;
    public $banner_is_active;
    public $banner_publish_date;
    public $banner_description;
    public $banner_button;
    public $banner_scroll;
    public $banner_created;
    public $banner_search;
    public $banner_datetime;

    public $connection;
    public $lastInsertedId;
    public $tblBanner;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblBanner = "banner";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblBanner} ";
             $sql .= "( banner_title, ";
             $sql .= "banner_image, ";
             $sql .= "banner_firstname, ";
             $sql .= "banner_lastname, ";
             $sql .= "banner_is_active, ";
             $sql .= "banner_publish_date, ";
             $sql .= "banner_description, ";
             $sql .= "banner_button, ";
             $sql .= "banner_scroll, ";
             $sql .= "banner_created, ";
             $sql .= "banner_datetime ) values ( ";
             $sql .= ":banner_title, ";
             $sql .= ":banner_image, ";
             $sql .= ":banner_firstname, ";
             $sql .= ":banner_lastname, ";
             $sql .= ":banner_is_active, ";
             $sql .= ":banner_publish_date, ";
             $sql .= ":banner_description, ";
             $sql .= ":banner_button, ";
             $sql .= ":banner_scroll, ";
             $sql .= ":banner_created, ";
             $sql .= ":banner_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "banner_title" => $this->banner_title,
                "banner_image" => $this->banner_image,
                "banner_firstname" => $this->banner_firstname,
                "banner_lastname" => $this->banner_lastname,
                "banner_is_active" => $this->banner_is_active,
                "banner_publish_date" => $this->banner_publish_date,
                "banner_description" => $this->banner_description,
                "banner_button" => $this->banner_button,
                "banner_scroll" => $this->banner_scroll,
                "banner_created" => $this->banner_created,
                "banner_datetime" => $this->banner_datetime,
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
            $sql .= "from {$this->tblBanner} ";
            $sql .= "order by banner_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBanner} ";
            $sql .= "where banner_aid = :banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_aid" => $this->banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblBanner} set ";
            $sql .= "banner_title = :banner_title, ";
            $sql .= "banner_image = :banner_image, ";
            $sql .= "banner_firstname = :banner_firstname, ";
            $sql .= "banner_lastname = :banner_lastname, ";
            $sql .= "banner_publish_date = :banner_publish_date, ";
            $sql .= "banner_description = :banner_description, ";
            $sql .= "banner_button = :banner_button, ";
            $sql .= "banner_scroll = :banner_scroll, ";
            $sql .= "banner_datetime = :banner_datetime ";
            $sql .= "where banner_aid  = :banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_title" => $this->banner_title,
                "banner_image" => $this->banner_image,
                "banner_firstname" => $this->banner_firstname,
                "banner_lastname" => $this->banner_lastname,
                "banner_publish_date" => $this->banner_publish_date,
                "banner_description" => $this->banner_description,
                "banner_button" => $this->banner_button,
                "banner_scroll" => $this->banner_scroll,
                "banner_datetime" => $this->banner_datetime,
                "banner_aid" => $this->banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblBanner} set ";
            $sql .= "banner_is_active = :banner_is_active, ";
            $sql .= "banner_datetime = :banner_datetime ";
            $sql .= "where banner_aid  = :banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_is_active" => $this->banner_is_active,
                "banner_datetime" => $this->banner_datetime,
                "banner_aid" => $this->banner_aid,
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
            $sql .= "from {$this->tblBanner} ";
            $sql .= "where banner_title like :banner_title ";
            $sql .= "order by banner_is_active desc, ";
            $sql .= "banner_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "banner_title" => "%{$this->banner_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}