
public class performanceCoeff {
    public static void main(String[] args) {
        double performanceCoeff = 0.0;
        double deadlift = 1.65581555539365;
        double dip = 1.92339534914527;
        double overheadPress = 2.53878471969250;
        double goodMorning = 3.18424370072569;
        double sumoDeadlift = 4.59948691795323;
        double squat = 6.49861242656458;
        double lunge = 7.27555287681395;
        double pullUp = 8.61358563546889;

        switch ((int) performanceCoeff) {
            case 1:
                performanceCoeff = deadlift;
                break;
            case 2:
                performanceCoeff = dip;
                break;
            case 3:
                performanceCoeff = overheadPress;
                break;
            case 4:
                performanceCoeff = goodMorning;
                break;
            case 5:
                performanceCoeff = sumoDeadlift;
                break;
            case 6:
                performanceCoeff = squat;
                break;
            case 7:
                performanceCoeff = lunge;
                break;
            case 8:
                performanceCoeff = pullUp;
                break;
        }

        double adjust = 0.0;
        double actual = 0.0;
        double master = 0.0;
        if (((actual / master) / (57.142857 / 100)) >= 1.00) {
            adjust = performanceCoeff;
        } else {
            adjust = ((actual / master) / (57.142857 / 100)) * performanceCoeff;
        }
    }
}
