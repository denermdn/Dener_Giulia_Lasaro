<?php
// include_once("connect.php");
function montaTabela()
{

    require_once('connect.php');
    //------------------------------------------------------------------
    session_start();
    $queryname = "select * FROM 
                (select user_name, row_number() over(order by user_pont_total desc) 
                from tb_user) op where  row_number = :id ";

    $querypoints = "select * FROM 
                (select user_pont_total, row_number() over(order by user_pont_total desc) 
                from tb_user) op where  row_number = :id ";

    $queryid = "select * FROM 
    (select user_id, row_number() over(order by user_pont_total desc) 
    from tb_user) op where  row_number = :id ";
    //---------------------------------------------------------------------
    $open_tr = '<tr ';
    $close_tr = '</tr>';
    $open_td = '<td>';
    $close_td = '</td>';
    $cores = array(
        'style="cursor: pointer;">',
        ' style="background: #ffbf00;">',
        ' style="background: #C0C0C0;">',
        ' style="background: #bf8970;">'
    );
    // $action='onclick="script:location.href=\'http://google.com.br\'"';
    $action='onclick="janela_info(this.id)"';

    echo $open_tr . '>';
    echo $open_td . 'Posição' . $close_td;
    echo $open_td . 'Nome' . $close_td;
    echo $open_td . 'Pontuação' . $close_td;
    echo $close_tr;
    for ($i = 0, $j = 1; $i < 10; $i++) {
        $h = array(
            ':id' => $i + 1
        );

        $stmt = $conn->prepare($queryid);
        $stmt->execute($h);
        $result = $stmt->fetchColumn();

        if ($j < 4) {
            echo $open_tr.'id='.$result.' '.$action.$cores[$j];
            $j++;
        } else {
            echo $open_tr.'id='.$result.' '.$action.$cores[0];
        }

        $stmt = $conn->prepare($queryname);
        $stmt->execute($h);
        $result = $stmt->fetchColumn();

        $classificacao = ($i + 1) . 'º';
        if ($result == '') {
            echo $close_tr;
            break;
        }
        echo $open_td . $classificacao . $close_td;
        echo $open_td . $result . $close_td;

        $stmt = $conn->prepare($querypoints);
        $stmt->execute($h);
        $result = $stmt->fetchColumn();

        echo $open_td . $result . $close_td;
        echo $close_tr;
    }
}
function detalhes(){
    // return '<div style="float:right;">TESTE</div>';
}
