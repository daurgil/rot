<?php
  class db {
      private $servidor;
      private $usuario;
      private $password;
      private $base_datos;
      private $link;
      private $stmt;
      private $array;
      static $_instance;

      private function __construct() {
          $this->setConection();
          $this->conectar();
      }

      private function setConection() {
          require_once 'conf.class.singleton.php';
          $conf = conf::getInstance();

          $this->servidor = $conf->_hostdb;
          $this->base_datos = $conf->_db;
          $this->usuario = $conf->_userdb;
          $this->password = $conf->_passdb;
      }

      /*private function __clones(){

      }*/

      public static function getInstance() {
            if (!(self::$_instance instanceof self))
                self::$_instance = new self();
            return self::$_instance;
      }

      private function conectar() {
            $this->link = new mysqli($this->servidor, $this->usuario, $this->password);
            $this->link->select_db($this->base_datos);
        }

        public function ejecutar($sql) {
          /*if ($sql == "SELECT * FROM tecnicos WHERE dni='11288118K'") {
            echo json_encode("db");
            exit;
          }*/

            $this->stmt = $this->link->query($sql);
            return $this->stmt;
        }

        public function listar($stmt) {
            $this->array = array();
            while ($row = $stmt->fetch_array(MYSQLI_ASSOC)) {
                array_push($this->array, $row);
            }
            return $this->array;
        }
  }
