<?php

Class Header {
    public $header_aid;
    public $header_image;
    public $header_is_active;
    public $header_publish_date;
    public $header_nav_1;
    public $header_nav_2;
    public $header_nav_3;
    public $header_nav_4;
    public $header_lang_1;
    public $header_lang_2;
    public $header_lang_3;
    public $header_created;
    public $header_search;
    public $header_datetime;

    public $connection;
    public $lastInsertedId;
    public $tblHeader;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblHeader = "header";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblHeader} ";
             $sql .= "( header_image, ";
             $sql .= "header_is_active, ";
             $sql .= "header_publish_date, ";
             $sql .= "header_nav_1, ";
             $sql .= "header_nav_2, ";
             $sql .= "header_nav_3, ";
             $sql .= "header_nav_4, ";
             $sql .= "header_nav_lang_1, ";
             $sql .= "header_nav_lang_2, ";
             $sql .= "header_nav_lang_3, ";
             $sql .= "header_created, ";
             $sql .= "header_datetime ) values ( ";
             $sql .= ":header_image, ";
             $sql .= ":header_is_active, ";
             $sql .= ":header_publish_date, ";
             $sql .= ":header_nav_1, ";
             $sql .= ":header_nav_2, ";
             $sql .= ":header_nav_3, ";
             $sql .= ":header_nav_4, ";
             $sql .= ":header_lang_1, ";
             $sql .= ":header_lang_2, ";
             $sql .= ":header_lang_3, ";
             $sql .= ":header_created, ";
             $sql .= ":header_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "header_image" => $this->header_image,
                "header_is_active" => $this->header_is_active,
                "header_publish_date" => $this->header_publish_date,
                "header_nav_1" => $this->header_nav_1,
                "header_nav_2" => $this->header_nav_2,
                "header_nav_3" => $this->header_nav_3,
                "header_nav_4" => $this->header_nav_4,
                "header_lang_1" => $this->header_lang_1,
                "header_lang_2" => $this->header_lang_2,
                "header_lang_3" => $this->header_lang_3,
                "header_created" => $this->header_created,
                "header_datetime" => $this->header_datetime,
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
            $sql .= "from {$this->tblHeader} ";
            $sql .= "order by header_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblHeader} ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_title = :header_title, ";
            $sql .= "header_image = :header_image, ";
            $sql .= "header_category = :header_category, ";
            $sql .= "header_publish_date = :header_publish_date, ";
            $sql .= "header_description = :header_description, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid  = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_title" => $this->header_title,
                "header_image" => $this->header_image,
                "header_category" => $this->header_category,
                "header_publish_date" => $this->header_publish_date,
                "header_description" => $this->header_description,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_is_active = :header_is_active, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid  = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_is_active" => $this->header_is_active,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
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
            $sql .= "from {$this->tblHeader} ";
            $sql .= "where header_title like :header_title ";
            $sql .= "order by header_is_active desc, ";
            $sql .= "header_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_title" => "%{$this->header_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}