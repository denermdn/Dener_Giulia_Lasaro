<?php
// include_once("connect.php");


function montaTabela()
{
    
    require_once('connect.php');
    //------------------------------------------------------------------
    session_start();
    $queryTotal = "select * FROM 
    (select user_id, user_name, user_pont_total, row_number() over(order by user_pont_total desc) 
    from tb_user) op where  row_number = :id ";

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
        ' style="cursor: pointer;"',
        ' style="background: #ffbf00;"',
        ' style="background: #C0C0C0;"',
        ' style="background: #bf8970;"'
    );
    $title=' title="';
    // $action='onclick="script:location.href=\'http://google.com.br\'"';
    $action='onclick="janela_info(this.title)"';
    $cone=$conn;
    $dadosaux = '';
    echo $open_tr . '>';
    echo $open_td . 'Posição' . $close_td;
    echo $open_td . 'Nome' . $close_td;
    echo $open_td . 'Pontuação' . $close_td;
    echo $close_tr;
    for ($i = 0, $j = 1; $i < 10; $i++) {
        $h = array(
            ':id' => $i + 1
        );

        $stmt = $cone->prepare($queryTotal);
        $stmt->execute($h);
        $result = $stmt->fetch();


        if ($j < 4) {
            $dadosaux=$title.$result[0].'_'.$result[1].'_'.$result[2];
            echo $open_tr.'id='.$result[0];
            echo ' '.$action.$cores[$j];
            echo $dadosaux;
            echo '">';
            $j++;
        } else {
            $dadosaux=$title.$result[0].'_'.$result['user_name'].'_'.$result[2];
            echo $open_tr.'id='.$result[0].' ';
            echo $action.$cores[0];
            echo $dadosaux;
            echo '">';
            //$dadosaux=$result[0];

        }

        $classificacao = ($i + 1) . 'º';
        if ($result[1] == '') {
            echo $close_tr;
            break;
        }
        echo $open_td . $classificacao . $close_td;
        echo $open_td . $result[1] . $close_td;

        //$dadosaux=$dadosaux.$result[1];

        echo $open_td . $result[2] . $close_td;
        //$dadosaux=$dadosaux.$result[2];
        echo $close_tr;
        
    }
    // $dados=$dados2;
    //session_destroy();
}
function detalhes(){
    // return '<div style="float:right;">TESTE</div>';
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