<?php

Class Top {
    public $top_aid;
    public $top_title;
    public $top_image;
    public $top_is_active;
    public $top_publish_date;
    public $top_date;
    public $top_subject;
    public $top_created;
    public $top_search;
    public $top_datetime;

    public $connection;
    public $lastInsertedId;
    public $tblTop;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblTop = "top";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblTop} ";
             $sql .= "( top_title, ";
             $sql .= "top_image, ";
             $sql .= "top_is_active, ";
             $sql .= "top_publish_date, ";
             $sql .= "top_date, ";
             $sql .= "top_subject, ";
             $sql .= "top_created, ";
             $sql .= "top_datetime ) values ( ";
             $sql .= ":top_title, ";
             $sql .= ":top_image, ";
             $sql .= ":top_is_active, ";
             $sql .= ":top_publish_date, ";
             $sql .= ":top_date, ";
             $sql .= ":top_subject, ";
             $sql .= ":top_created, ";
             $sql .= ":top_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "top_title" => $this->top_title,
                "top_image" => $this->top_image,
                "top_is_active" => $this->top_is_active,
                "top_publish_date" => $this->top_publish_date,
                "top_date" => $this->top_date,
                "top_subject" => $this->top_subject,
                "top_created" => $this->top_created,
                "top_datetime" => $this->top_datetime,
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
            $sql .= "from {$this->tblTop} ";
            $sql .= "order by top_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTop} ";
            $sql .= "where top_aid = :top_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "top_aid" => $this->top_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblTop} set ";
            $sql .= "top_title = :top_title, ";
            $sql .= "top_image = :top_image, ";
            $sql .= "top_publish_date = :top_publish_date, ";
            $sql .= "top_date = :top_date, ";
            $sql .= "top_subject = :top_subject, ";
            $sql .= "top_datetime = :top_datetime ";
            $sql .= "where top_aid  = :top_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "top_title" => $this->top_title,
                "top_image" => $this->top_image,
                "top_publish_date" => $this->top_publish_date,
                "top_date" => $this->top_date,
                "top_subject" => $this->top_subject,
                "top_datetime" => $this->top_datetime,
                "top_aid" => $this->top_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblTop} set ";
            $sql .= "top_is_active = :top_is_active, ";
            $sql .= "top_datetime = :top_datetime ";
            $sql .= "where top_aid  = :top_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "top_is_active" => $this->top_is_active,
                "top_datetime" => $this->top_datetime,
                "top_aid" => $this->top_aid,
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
            $sql .= "from {$this->tblTop} ";
            $sql .= "where top_title like :top_title ";
            $sql .= "order by top_is_active desc, ";
            $sql .= "top_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "top_title" => "%{$this->top_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}