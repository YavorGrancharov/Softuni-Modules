<head>
    <style>
        div {
            display: inline-block;
            width: 150px;
            padding: 2px;
            margin: 5px;
        }
        <div style='background:rgb(0, 0, 0)'>rgb(0, 0, 0)</div> <div style='background:rgb(0, 0, 51)'>rgb(0, 0, 51)</div
        <div style='background:rgb(0, 0, 255)'>rgb(0, 0, 255)</div><div style='background:rgb(0, 51, 0)'>rgb(0, 51, 0)</div>
        <div style='background:rgb(0, 51, 51)'>rgb(0, 51, 51)</div><div style='background:rgb(0, 51, 102)'>rgb(0, 51, 102)</div>
        <div style='background:rgb(0, 255, 255)'>rgb(0, 255, 255)</div><div style='background:rgb(51, 0, 0)'>rgb(51, 0, 0)</div>
        <div style='background:rgb(255, 255, 255)'>rgb(255, 255, 255)</div>
        </style>
</head>
<body><?php
for ($red = 0; $red <= 255; $red += 51)
    for ($green = 0; $green <= 255; $green += 51)
        for ($blue = 0; $blue <= 255; $blue += 51) {
            $color = "rgb($red, $green, $blue)";
            echo "<div style='background:$color'>
$color</div>\n";
        }
?>
</body>