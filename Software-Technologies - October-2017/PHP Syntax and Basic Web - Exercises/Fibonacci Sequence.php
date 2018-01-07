<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num" />
    <input type="submit" />
</form>
<?php
    if (isset($_GET['num'])) {
        $num = intval($_GET['num']);
        if ($num == 1) {
            echo "1";
        }
        else {
            $fib = 0;
            $set = [1, 1];
            for ($x = 2; $x < $num; $x++) {
                $set[$x] = $set[$x-1] + $set[$x-2];
            }
            echo implode(" ", $set);
        }
    }
?>
</body>
</html>