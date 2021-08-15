<?php
// include_once("connect.php");
function montaTabela()
{
    $usuario = array(
        'Dener', 'Giulia', 'Lásaro',
        'Zarref', 'A_ivil', 'Flavin Do Pneu',
        'Ginzwar', 'Shambler', 'PHFSO', 'R.Sarah'
    );
//------------------------------------------------------------------
                require_once ('connect.php');
                session_start();
                $query = "select * FROM 
                (select user_name, row_number() over(order by user_pont_total desc) 
                from tb_user) op where  row_number = :id ";

                $queryy = "select * FROM 
                (select user_pont_total, row_number() over(order by user_pont_total desc) 
                from tb_user) op where  row_number = :id ";

//---------------------------------------------------------------------
    $open_tr = '<tr';
    $close_tr = '</tr>';
    $open_td = '<td>';
    $close_td = '</td>';
    $cores = array(
        '>', ' style="background: #ffbf00;">',  ' style="background: #C0C0C0;">',
        ' style="background: #bf8970;">'
    );

    echo $open_tr . '>';
    echo $open_td . 'Posição' . $close_td;
    echo $open_td . 'Nome' . $close_td;
    echo $open_td . 'Pontuação' . $close_td;
    echo $close_tr;
    for ($i = 0, $j = 1; $i < 10; $i++) {
        if ($j < 4) {
            echo $open_tr . $cores[$j];
            $j++;
        } else {
            echo $open_tr . $cores[0];
        }

        $h=array(
            ':id' => $i+1
        );

        $stmt=$conn->prepare($query);
        $stmt->execute($h);
        $result = $stmt->fetchColumn();
        
        echo $open_td . ($i + 1) .'º'. $close_td;
        echo $open_td . $result . $close_td;

        $stmt=$conn->prepare($queryy);
        $stmt->execute($h);
        $result = $stmt->fetchColumn();

        echo $open_td . $result . $close_td;
        echo $close_tr;
    }
}
