<form>
    First Number: <br>
    <input type="text" name="num1"/><br>
    Second Number: <br>
    <input type="text" name="num2"/><br>
    <input type="submit" value="Submit"/>
</form>
<?php
    $sum = 0;
    if (isset($_GET['num1']) && isset($_GET['num2'])) {
        $num1 = intval($_GET['num1']);
        $num2 = intval($_GET['num2']);
        $sum = $num1 + $num2;
        echo "$num1 + $num2 = $sum";
    }
?>