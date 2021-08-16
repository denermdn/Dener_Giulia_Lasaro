<?php
// include_once("connect.php");


function montaTabela()
{

    // require_once('connect.php');
    // //------------------------------------------------------------------
    // try {
    //     session_start();
    //     $query = "select * FROM 
    //             (select user_name, row_number() over(order by user_pont_total desc) 
    //             from tb_user) op where  row_number = :id ";

    //     $queryy = "select * FROM 
    //             (select user_pont_total, row_number() over(order by user_pont_total desc) 
    //             from tb_user) op where  row_number = :id ";

    //     //---------------------------------------------------------------------
    //     $open_tr = '<tr ';
    //     $close_tr = '</tr>';
    //     $open_td = '<td>';
    //     $close_td = '</td>';
    //     $cores = array(
    //         'style="cursor: pointer;">',
    //         ' style="background: #ffbf00;">',
    //         ' style="background: #C0C0C0;">',
    //         ' style="background: #bf8970;">'
    //     );

    //     $action = 'onclick="janela_info()"';

    //     echo $open_tr . '>';
    //     echo $open_td . 'Posição' . $close_td;
    //     echo $open_td . 'Nome' . $close_td;
    //     echo $open_td . 'Pontuação' . $close_td;
    //     echo $close_tr;
    //     for ($i = 0, $j = 1; $i < 10; $i++) {
    //         if ($j < 4) {
    //             echo $open_tr . $action . $cores[$j];
    //             $j++;
    //         } else {
    //             echo $open_tr . $action . $cores[0];
    //         }

    //         $h = array(
    //             ':id' => $i + 1
    //         );
    //         // ----------------------
    //         $stmt = $conn->prepare($query);
    //         $stmt->execute($h);
    //         $result = $stmt->fetchColumn();
    //         // ----------------------

    //         $classificacao = ($i + 1) . 'º';
    //         if ($result == '') {
    //             echo $close_tr;
    //             break;
    //         }
    //         echo $open_td . $classificacao . $close_td;
    //         echo $open_td . $result . $close_td;

    //         $stmt = $conn->prepare($queryy);
    //         $stmt->execute($h);
    //         $result = $stmt->fetchColumn();

    //         echo $open_td . $result . $close_td;
    //         echo $close_tr;


    require_once('connect.php');
    // ------------------------------------------------------------------
    try {
        session_start();
        $open_tr = '<tr ';
        $close_tr = '</tr>';
        $open_td = '<td>';
        $close_td = '</td>';
        $cores = array(
            'style="cursor: pointer;">',
            ' style="background: #ffbf00;"> ',
            ' style="background: #C0C0C0;"> ',
            ' style="background: #bf8970;"> '
        );
        $action = 'onclick="janela_info(this.id)"';

        echo $open_tr . '>';
        echo $open_td . 'Posição' . $close_td;
        echo $open_td . 'Nome' . $close_td;
        echo $open_td . 'Pontuação' . $close_td;
        echo $close_tr;

        $query = 'SELECT * FROM (SELECT USER_ID, USER_NAME, USER_PONT_TOTAL, USER_NASCIMENTO, USER_EMAIL, ROW_NUMBER()
        OVER(ORDER BY USER_PONT_TOTAL DESC) FROM TB_USER) op WHERE ROW_NUMBER=:id;';

        $stmt = $conn->prepare($query);
        for ($i = 0, $j = 1; $i < 10; $i++) {
            // ------------------------------------------------------------------------
            $h = array(
                ':id' => $i + 1
            );
            $stmt->execute($h);
            $result = $stmt->fetch();
            // ------------------------------------------------------------------------
            if (!is_bool($result)) {
                if ($j < 4) {
                    echo $open_tr . 'id="' . $result["user_id"] . '" ' . $action . $cores[$j];
                    $j++;
                } else {
                    echo $open_tr . 'id="' . $result["user_id"] . '" ' . $action . $cores[0];
                }
                $classificacao = ($i + 1) . 'º';
                if ($result == '') {
                    echo $close_tr;
                    break;
                }
                echo '<td style="display: none;" id="'.$result["user_id"].'_" >';
                echo $result['user_id'].' '.$result["user_name"].' '.$result["user_pont_total"].' '.$result["user_email"].' '.$result["user_nascimento"];
                echo $close_td;

                echo $open_td . $classificacao . $close_td;
                echo $open_td . $result["user_name"] . $close_td;

                echo $open_td . $result["user_pont_total"] . $close_td;
                echo $close_tr;
            }
        }
    } catch (PDOException $e) {
    }
    // $dados=$dados2;
    //session_destroy();
}
function detalhes()
{
    require_once('connect.php');
     //session_start();
     $query = 'SELECT * FROM (SELECT USER_ID, USER_NAME, USER_PONT_TOTAL, ROW_NUMBER()
     OVER(ORDER BY USER_PONT_TOTAL DESC) FROM TB_USER) op WHERE ROW_NUMBER=:id;';

    $stmt = $conn->prepare($query);
    for($i=0;$i<10;$i++)
    {
        $h = array(
            ':id' => $i+1
        );
            
        $stmt->execute($h);
        $result = $stmt->fetch();

        echo $result["user_id"].$result["user_name"].$result["user_pont_total"].',';
    }
}

function pegaDados(){
    $r = array(
        'oi',
        'ola',
        'tudo'
    );

    //echo $dados[0].$r[1].$r[2];
}
?>