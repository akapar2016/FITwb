function editWeatherValues(value, apt) {
    console.log("editWeatherValues:" + apt);

    value = value.getElementsByTagName("METAR")[0];

    document.getElementById(apt + "WeatherTime").innerHTML = 
        ((value.getElementsByTagName("observation_time").length > 0) ?
        value.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue : "--");
    
    document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[0].value = 
        ((value.getElementsByTagName("wind_dir_degrees").length > 0) ?
        value.getElementsByTagName("wind_dir_degrees")[0].childNodes[0].nodeValue : "--"); 

    document.getElementById(apt +"WeatherWind").getElementsByTagName("input")[1].value = 
        ((value.getElementsByTagName("wind_speed_kt").length > 0) ?
        value.getElementsByTagName("wind_speed_kt")[0].childNodes[0].nodeValue : "--"); 

    document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[2].value = 
        ((value.getElementsByTagName("wind_gust_kt").length > 0) ?
        value.getElementsByTagName("wind_gust_kt")[0].childNodes[0].nodeValue : "0"); 

    document.getElementById(apt + "WeatherVis").innerHTML = 
        ((value.getElementsByTagName("visibility_statute_mi").length > 0) ?
        value.getElementsByTagName("visibility_statute_mi")[0].childNodes[0].nodeValue : "--");

    document.getElementById(apt + "WeatherSky").innerHTML = "";
    var skycond = value.getElementsByTagName("sky_condition");
    for (var i = 0; i < skycond.length; i++) {
        document.getElementById(apt + "WeatherSky").innerHTML = 
            document.getElementById(apt + "WeatherSky").innerHTML + 
            skycond[i].getAttribute('sky_cover') + " " + 
            ((skycond[i].getAttribute('cloud_base_ft_agl') != null) ?
            skycond[i].getAttribute('cloud_base_ft_agl') : "") + " ";
    }

    document.getElementById(apt + "WeatherDisp").innerHTML = 
        (value.getElementsByTagName("wx_string").length > 0 ? 
        value.getElementsByTagName("wx_string")[0].childNodes[0].nodeValue : "--");

    document.getElementById(apt + "WeatherTemp").getElementsByTagName("input")[0].value = 
        ((value.getElementsByTagName("temp_c").length > 0) ?
        value.getElementsByTagName("temp_c")[0].childNodes[0].nodeValue : "--"); 

    document.getElementById(apt + "WeatherDew").getElementsByTagName("input")[0].value = 
        ((value.getElementsByTagName("dewpoint_c").length > 0) ?
        value.getElementsByTagName("dewpoint_c")[0].childNodes[0].nodeValue : "--"); 

    document.getElementById(apt + "elevation").getElementsByTagName("input")[0].value = 
        ((value.getElementsByTagName("elevation_m").length > 0) ?
        (parseFloat(value.getElementsByTagName("elevation_m")[0].childNodes[0].nodeValue) * 3.28084).toFixed(0) : "--"); 

    document.getElementById(apt + "WeatherAlt").getElementsByTagName("input")[0].value = 
        ((value.getElementsByTagName("altim_in_hg").length > 0) ?
        parseFloat(value.getElementsByTagName("altim_in_hg")[0].childNodes[0].nodeValue).toFixed(2) : "--"); 
    
    document.getElementById(apt + "WeatherRaw").innerHTML = 
        ((value.getElementsByTagName("raw_text").length > 0) ?
        value.getElementsByTagName("raw_text")[0].childNodes[0].nodeValue : "--"); 
}

function weatherOnEditChange(apt) {
    console.log("weatherOnEditChange: " + apt);

    document.getElementById(apt + "WeatherGustFactor").innerHTML =  
        ((document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[2].value != 0) ? 
        "Gust Factor: " + parseFloat(document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[2].value - 
        document.getElementById(apt + "WeatherWind").getElementsByTagName("input")[1].value) : "");
        
    document.getElementById(apt + "WeatherTempDif").innerHTML = 
        (parseFloat(document.getElementById(apt + "WeatherTemp").getElementsByTagName("input")[0].value) - 
        parseFloat(document.getElementById(apt + "WeatherDew").getElementsByTagName("input")[0].value)).toFixed(1);

    document.getElementById(apt + "pressA").innerHTML = 
        ((29.92 - parseFloat(document.getElementById(apt + "WeatherAlt").getElementsByTagName("input")[0].value)) * 1000 + 
        parseFloat(document.getElementById(apt + "elevation").getElementsByTagName("input")[0].value)).toFixed(1);

    var stdTemp = 15 - (parseFloat(document.getElementById(apt + "elevation").getElementsByTagName("input")[0].value) / 1000) * 2;
    document.getElementById(apt + "dAlt").innerHTML = 
        (parseFloat(document.getElementById(apt + "pressA").innerHTML) + 
        (120 * (document.getElementById(apt + "WeatherTemp").getElementsByTagName("input")[0].value - 
        stdTemp))).toFixed(1);
}
