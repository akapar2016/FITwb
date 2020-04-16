
//Access-Control-Allow-Origin: https://www.aviationweather.gov;
function getWeather(icao, apt) {
    console.log("getWeather: " + icao);
    
    var xhttp = new XMLHttpRequest();
    var xmlParser = new DOMParser();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xmlParser.parseFromString(this.responseText, "application/xml"));
            editWeatherValues(xmlParser.parseFromString(this.responseText, "application/xml"), apt);
            weatherOnEditChange(apt);
            calcRunwayWinds(apt);
        }
    }
    //xhttp.setRequestHeader('Content-Type', 'application/xml');
    xhttp.open("GET", "weather/proxy.php?a=" + icao, true);
    xhttp.send(null);
}
