<?php
    function celsiusToFahrenheit(float $celsius) {
        return $celsius * 9/5 + 32;
    }
    function fahrenheitToCelsius(float $fahrenheit) {
        return ($fahrenheit - 32) * 5/9;
    }
    $msgCel = "";
    if (isset($_GET['cel'])) {
        $celsius = floatval($_GET['cel']);
        $degrees = celsiusToFahrenheit($celsius);
        $msgCel = "$celsius &deg;C = $degrees &deg;F";
    }
    $msgFah = "";
    if (isset($_GET['fah'])) {
        $fahrenheit = floatval($_GET['fah']);
        $degrees = fahrenheitToCelsius($fahrenheit);
        $msgCel = "$fahrenheit &deg;F = $degrees &deg;C";
    }
?>
<form>
    Celsius: <input type="text" name="cel"/>
    <input type="submit" value="Convert">
    <?= $msgCel ?>
</form>
<form>
    Fahrenheit: <input type="text" name="fah"/>
    <input type="submit" value="Convert"><?= $msgFah ?>
</form>