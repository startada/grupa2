<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="autor" content="Branko Stevanovic (branko@agenzzia.com)">
    <title>Title</title>
    <style>
        .ime-container{
            background-color: #dedede;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<?php
$prvi = $_GET['prvi'];
$drugi = $_GET['drugi'];

if(isset($_GET['treci'])){
    $treci = $_GET['treci'];
}
else{
    $treci = '';
}

$prva    = 'hello world!';
$prviNiz = ['stefan', 'radovan', 'bojana', 'radmila'];
echo $prvi.' '.$drugi.' '.$treci;

?>
<div class="container">

    <div class="row">
        <div class="col-md-12">
            <div class="content">
                <h1>De si dinamic</h1>
                <div class="inner-content">
                    <p>Inner dinamic</p>
                    <strong><?php
                        $prva = 34;
                        echo "napisi nesto $prva <br/>  ";
                        for($i = 0; $i < count($prviNiz); $i++) {
                            echo '<div class="ime-container">' . $prviNiz[ $i ] . '</div>';
                        }

                        foreach($prviNiz as $item) {
                            echo '<div class="ime-container">' . $item . '</div>';
                        }

                        ?></strong>
                    <p>-------------------------------</p>
                    <?php foreach($prviNiz as $item): ?>
                        <div class="ime-container"><?php echo $item ?></div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>

</div>
</body>
</html>