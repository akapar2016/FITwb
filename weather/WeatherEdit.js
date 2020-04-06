
function editDepWeatherValues(value) {
    console.log("editDepWeatherValues");

    value = value.getElementsByTagName("METAR")[0];
    document.getElementById("DWeatherTime").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherWind").innerHTML = 
        value.getElementsByTagName("wind_dir_degrees")[0].childNodes[0].nodeValue + 'deg/' +
        value.getElementsByTagName("wind_speed_kt")[0].childNodes[0].nodeValue + 'KT';

    document.getElementById("DWeatherVis").innerHTML = 
        value.getElementsByTagName("visibility_statute_mi")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherSky").innerHTML = "";
    var skycond = value.getElementsByTagName("sky_condition");
    for (var i = 0; i < skycond.length; i++) {
        document.getElementById("DWeatherSky").innerHTML = 
            document.getElementById("DWeatherSky").innerHTML + 
            skycond[i].getAttribute('sky_cover') + " " + 
            skycond[i].getAttribute('cloud_base_ft_agl') + " "
    }

    document.getElementById("DWeatherDisp").innerHTML = 
        (value.getElementsByTagName("wx_string").length > 0 ? 
        value.getElementsByTagName("wx_string")[0].childNodes[0].nodeValue : "None");

    document.getElementById("DWeatherTemp").getElementsByTagName("input")[0].value = 
        value.getElementsByTagName("temp_c")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherDew").getElementsByTagName("input")[0].value = 
        value.getElementsByTagName("dewpoint_c")[0].childNodes[0].nodeValue;

    document.getElementById("Delevation").getElementsByTagName("input")[0].value = 
        (parseFloat(value.getElementsByTagName("elevation_m")[0].childNodes[0].nodeValue) * 3.28084).toFixed(0);

    document.getElementById("DWeatherAlt").getElementsByTagName("input")[0].value = 
        parseFloat(value.getElementsByTagName("altim_in_hg")[0].childNodes[0].nodeValue).toFixed(2);
    
    document.getElementById("DWeatherRaw").innerHTML = 
        value.getElementsByTagName("raw_text")[0].childNodes[0].nodeValue;

    weatherDepOnEditChange();
}

function weatherDepOnEditChange() {
    console.log("weatherDepOnEditChange");

    document.getElementById("DWeatherTempDif").innerHTML = 
        (parseFloat(document.getElementById("DWeatherTemp").getElementsByTagName("input")[0].value) - 
        parseFloat(document.getElementById("DWeatherDew").getElementsByTagName("input")[0].value)).toFixed(1);

    document.getElementById("DpressA").innerHTML = 
        ((29.92 - parseFloat(document.getElementById("DWeatherAlt").getElementsByTagName("input")[0].value)) * 1000 + 
        parseFloat(document.getElementById("Delevation").getElementsByTagName("input")[0].value)).toFixed(1);

    var stdTemp = 15 - (parseFloat(document.getElementById("Delevation").getElementsByTagName("input")[0].value) / 1000) * 2;
    document.getElementById("DdAlt").innerHTML = 
        (parseFloat(document.getElementById("DpressA").innerHTML) + 
        (120 * (document.getElementById("DWeatherTemp").getElementsByTagName("input")[0].value - 
        stdTemp))).toFixed(1);
}

function editArWeatherValues(value) {
    console.log("editArWeatherValues");

    document.getElementById("AWeatherTime").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherWind").innerHTML = 
        value.getElementsByTagName("wind_dir_degrees")[0].childNodes[0].nodeValue + 'deg/' +
        value.getElementsByTagName("wind_speed_kt")[0].childNodes[0].nodeValue + 'KT';

    document.getElementById("AWeatherVis").innerHTML = 
        value.getElementsByTagName("visibility_statute_mi")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherSky").innerHTML = "";
        var skycond = value.getElementsByTagName("sky_condition");
        for (var i = 0; i < skycond.length; i++) {
            document.getElementById("AWeatherSky").innerHTML = 
                document.getElementById("AWeatherSky").innerHTML + 
                skycond[i].getAttribute('sky_cover') + " " + 
                skycond[i].getAttribute('cloud_base_ft_agl') + " "
        }

    document.getElementById("AWeatherDisp").innerHTML = 
        (value.getElementsByTagName("wx_string").length > 0 ? 
        value.getElementsByTagName("wx_string")[0].childNodes[0].nodeValue : "None");

    document.getElementById("AWeatherTemp").getElementsByTagName("input")[0].value = 
        value.getElementsByTagName("temp_c")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherDew").getElementsByTagName("input")[0].value = 
        value.getElementsByTagName("dewpoint_c")[0].childNodes[0].nodeValue;

    document.getElementById("Aelevation").getElementsByTagName("input")[0].value = 
        (parseFloat(value.getElementsByTagName("elevation_m")[0].childNodes[0].nodeValue) * 3.28084).toFixed(0);

    document.getElementById("AWeatherAlt").getElementsByTagName("input")[0].value = 
        parseFloat(value.getElementsByTagName("altim_in_hg")[0].childNodes[0].nodeValue).toFixed(2);
    
    document.getElementById("AWeatherRaw").innerHTML = 
        value.getElementsByTagName("raw_text")[0].childNodes[0].nodeValue;

        weatherArrOnEditChange();
}

function weatherArrOnEditChange() {
    console.log("weatherArrOnEditChange");

    document.getElementById("AWeatherTempDif").innerHTML = 
        (parseFloat(document.getElementById("AWeatherTemp").getElementsByTagName("input")[0].value) - 
        parseFloat(document.getElementById("AWeatherDew").getElementsByTagName("input")[0].value)).toFixed(1);

    document.getElementById("ApressA").innerHTML = 
        ((29.92 - parseFloat(document.getElementById("AWeatherAlt").getElementsByTagName("input")[0].value)) * 1000 + 
        parseFloat(document.getElementById("Aelevation").getElementsByTagName("input")[0].value)).toFixed(1);

    var stdTemp = 15 - (parseFloat(document.getElementById("Aelevation").getElementsByTagName("input")[0].value) / 1000) * 2;
    document.getElementById("AdAlt").innerHTML = 
        (parseFloat(document.getElementById("ApressA").innerHTML) + 
        (120 * (document.getElementById("AWeatherTemp").getElementsByTagName("input")[0].value - 
        stdTemp))).toFixed(1);

}