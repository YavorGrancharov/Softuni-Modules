function roadRadar([speed, area]) {
    speed = Number(speed);
    function getLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
                break;
            case 'city':
                return 50;
                break;
            case 'residential':
                return 20;
                break;
            case 'interstate':
                return 90;
                break;
        }
    }
    let limit = getLimit(area);

        function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        }
        else if (overSpeed > 0 && overSpeed <= 20){
            return 'speeding';
        }
        else if (overSpeed > 20 && overSpeed <= 40) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }
    let infraction = getInfraction(speed, limit);

    if (infraction) {
        console.log(infraction);
    }
}
roadRadar([21, 'residential']);