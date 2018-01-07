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
        $res = 1;
        $n = intval($_GET['num']);
        if ($n == 0) {
            echo "1";
        }
        else {
            for ($x = 1; $x <= $n; $x++) {
                $res *= $x;
            }
        }
        echo $res;
    }
?>
</body>
</html>