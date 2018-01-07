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
        $set = [];
        $num = intval($_GET['num']);
        for ($x = $num; $x >= 1; $x--) {
            if ($num % $x != 0) {
                $set[] = $x;
            }
        }
        echo implode(" ",$set);
    }
?>
</body>
</html>