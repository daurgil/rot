<?php
/*echo json_encode('DAO');
exit;*/
class list_dao {
    static $_instance;

    private function __construct() {
    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function list_products_DAO($db) {
        $sql = "SELECT * FROM tecnicos";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function details_products_DAO($db, $arrArgument) {

        //$sql = "SELECT * FROM tecnicos where dni =".$arrArgument ;
        //$sql = "SELECT * from tecnicos where dni ='11288118K'";
        //$sql = "select * from tecnicos where dni ='".$ides."'";
        $sql = "SELECT dni, name, phone, email, description, points FROM tecnicos where dni ='".$arrArgument."'";
        //$sql = "SELECT COUNT(*) as total from tecnicos";
        /*echo json_encode($sql);
        exit;*/
        $stmt = $db->ejecutar($sql);

        $result = $db->listar($stmt);
        /*echo json_encode($result);
        exit;*/
        return $result;
    }

    public function list_limit_products_DAO($db, $arrArgument) {
        $sql = "SELECT * FROM tecnicos ORDER BY dni ASC LIMIT " . $arrArgument['position'] . ", " . $arrArgument['limit'];
        $stmt = $db->ejecutar($sql);
        return$db->listar($stmt);
    }

    public function count_products_DAO($db) {
        $sql = "SELECT COUNT(*) as total from tecnicos";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_column_products_DAO($db, $arrArgument) {
        $sql = "SELECT " . $arrArgument . " FROM tecnicos ORDER BY " . $arrArgument;

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }

    public function select_like_products_DAO($db, $arrArgument) {
        $sql = "SELECT DISTINCT dni, name, phone, email, description, points FROM tecnicos WHERE " . $arrArgument['column'] . " like '%" . $arrArgument['like'] . "%'";
        //$sql = "SELECT DISTINCT * FROM tecnicos WHERE " . $arrArgument['column'] . " like '%" . $arrArgument['like'] . "%'";
        /*echo json_encode($sql);
        exit;*/
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }
     public function count_like_products_DAO($db, $arrArgument) {
        $sql = "SELECT COUNT(*) as total FROM tecnicos WHERE " . $arrArgument['column'] . " like '%" . $arrArgument['like'] . "%'";

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
    }
    public function select_like_limit_products_DAO($db, $arrArgument) {

        $sql="SELECT DISTINCT * FROM tecnicos WHERE ".$arrArgument['column']." like '%". $arrArgument['like']. "%' ORDER BY dni ASC LIMIT ". $arrArgument['position']." , ". $arrArgument['limit'];

        $stmt=$db->ejecutar($sql);
        return $db->listar($stmt);
    }

    /*public function page_products_DAO($db,$arrArgument) {
        $position = $arrArgument['position'];
        $item_per_page = $arrArgument['item_per_page'];
        $sql = "SELECT * FROM products ORDER BY ident ASC LIMIT ".$position." , ".$item_per_page;

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);

    }

    public function total_products_DAO($db) {
        $sql = "SELECT COUNT(*) as total FROM products";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);

    }*/
}
