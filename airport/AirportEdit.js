function calcRunwayWinds (apt) {
    console.log("calcRunwayWinds: " + apt);

    var heading = document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[0].value;
    var speed = document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[1].value;
    var gust = document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[2].value;
    var runwayHeading = document.getElementById(apt + "runway").getElementsByTagName("input")[0].value * 10;


    var xWind = (speed * Math.sin((heading * Math.PI / 180) - (runwayHeading * Math.PI / 180))).toFixed(1);
    var headWind = (speed * Math.cos((heading * Math.PI / 180) - (runwayHeading * Math.PI / 180))).toFixed(1);
    var xWindGust = ((gust > 0) ? 
                    (gust * Math.sin((heading * Math.PI / 180) - (runwayHeading * Math.PI / 180))).toFixed(1) : "");
    var headWindGust = ((gust > 0) ? 
                    (gust * Math.cos((heading * Math.PI / 180) - (runwayHeading * Math.PI / 180))).toFixed(1) : "");
    
    var xWindVal = "";
    var headWindVal = "";
    if (xWind == 0 ) {
        xWindVal = "Calm";
    } else if (xWind > 0) {
        xWindVal = "← " + Math.abs(xWind);
    } else {
        xWindVal = Math.abs(xWind) + " →";
    }
    if (xWindGust > 0) {
        xWindVal = xWindVal +  " GUST:" + Math.abs(xWindGust);
    } else if (xWindGust < 0) {
        xWindVal = xWindVal + " GUST: " + Math.abs(xWindGust);
    }

    if (headWind == 0 ) {
        headWindVal = "Calm";
    } else {
        headWindVal = headWind;
    }
    if (headWindGust > 0) {
        headWindVal = headWindVal +  " GUST:" + headWindGust;
    } else if (headWindGust < 0) {
        headWindVal = headWindVal + " GUST: " + headWindGust;
    }


    document.getElementById(apt + "xwind").innerHTML = xWindVal
    document.getElementById(apt + "headwind").innerHTML = headWindVal

}