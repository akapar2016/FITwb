
function editDepWeatherValues(value) {
    document.getElementById("DWeatherTime").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherWind").innerHTML = 
        value.getElementsByTagName("wind_dir_degrees")[0].childNodes[0].nodeValue + 'deg/' +
        value.getElementsByTagName("wind_speed_kt")[0].childNodes[0].nodeValue + 'KT';

    document.getElementById("DWeatherVis").innerHTML = 
        value.getElementsByTagName("visibility_statute_mi")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherSky").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherTemp").innerHTML = 
        value.getElementsByTagName("temp_c")[0].childNodes[0].nodeValue;

    document.getElementById("DWeatherDew").innerHTML = 
        value.getElementsByTagName("dewpoint_c")[0].childNodes[0].nodeValue;

    document.getElementById("Delevation").innerHTML = 
        (parseFloat(value.getElementsByTagName("elevation_m")[0].childNodes[0].nodeValue) * 3.28084).toFixed(0);

    document.getElementById("DWeatherAlt").innerHTML = 
        value.getElementsByTagName("altim_in_hg")[0].childNodes[0].nodeValue;
    
    document.getElementById("DWeatherRaw").innerHTML = 
        value.getElementsByTagName("raw_text")[0].childNodes[0].nodeValue;

    weatherDepOnEditChange();
}

function weatherDepOnEditChange() {
    document.getElementById("DWeatherTempDif").innerHTML = 
        (parseFloat(document.getElementById("DWeatherTemp").innerHTML) - 
        parseFloat(document.getElementById("DWeatherDew").innerHTML)).toFixed(1);

    document.getElementById("DpressA").innerHTML = 
        ((29.92 - parseFloat(document.getElementById("DWeatherAlt").innerHTML)) * 1000 + 
        parseFloat(document.getElementById("Delevation").innerHTML)).toFixed(1);

    var stdTemp = 15 - (parseFloat(document.getElementById("Delevation").innerHTML) / 1000) * 2;
    document.getElementById("DdAlt").innerHTML = 
        (parseFloat(document.getElementById("DpressA").innerHTML) + 
        (120 * (document.getElementById("DWeatherTemp").innerHTML - 
        (15 - stdTemp)))).toFixed(1);

}

function editArWeatherValues(value) {
    document.getElementById("AWeatherTime").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherWind").innerHTML = 
        value.getElementsByTagName("wind_dir_degrees")[0].childNodes[0].nodeValue + 'deg/' +
        value.getElementsByTagName("wind_speed_kt")[0].childNodes[0].nodeValue + 'KT';

    document.getElementById("AWeatherVis").innerHTML = 
        value.getElementsByTagName("visibility_statute_mi")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherSky").innerHTML = 
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherTemp").innerHTML = 
        value.getElementsByTagName("temp_c")[0].childNodes[0].nodeValue;

    document.getElementById("AWeatherDew").innerHTML = 
        value.getElementsByTagName("dewpoint_c")[0].childNodes[0].nodeValue;

    document.getElementById("Aelevation").innerHTML = 
        (parseFloat(value.getElementsByTagName("elevation_m")[0].childNodes[0].nodeValue) * 3.28084).toFixed(0);

    document.getElementById("AWeatherAlt").innerHTML = 
        value.getElementsByTagName("altim_in_hg")[0].childNodes[0].nodeValue;
    
    document.getElementById("AWeatherRaw").innerHTML = 
        value.getElementsByTagName("raw_text")[0].childNodes[0].nodeValue;

        weatherArrOnEditChange();
}

function weatherArrOnEditChange() {
    document.getElementById("AWeatherTempDif").innerHTML = 
        (parseFloat(document.getElementById("AWeatherTemp").innerHTML) - 
        parseFloat(document.getElementById("AWeatherDew").innerHTML)).toFixed(1);

    document.getElementById("ApressA").innerHTML = 
        ((29.92 - parseFloat(document.getElementById("AWeatherAlt").innerHTML)) * 1000 + 
        parseFloat(document.getElementById("Aelevation").innerHTML)).toFixed(1);

    var stdTemp = 15 - (parseFloat(document.getElementById("Aelevation").innerHTML) / 1000) * 2;
    document.getElementById("AdAlt").innerHTML = 
        (parseFloat(document.getElementById("ApressA").innerHTML) + 
        (120 * (document.getElementById("AWeatherTemp").innerHTML - 
        (15 - stdTemp)))).toFixed(1);

}