
//Access-Control-Allow-Origin: https://www.aviationweather.gov;
function getWeather(icao, dep) {
    var xhttp = new XMLHttpRequest();
    var xmlParser = new DOMParser();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if (dep) {
                editDepWeatherValues(xmlParser.parseFromString(this.responseText, "application/xml"));
            } else {
                editArWeatherValues(xmlParser.parseFromString(this.responseText, "application/xml"));
            }

        }
    }
    //xhttp.setRequestHeader('Content-Type', 'application/xml');
    xhttp.open("GET", "weather/proxy.php?a=" + icao, true);
    xhttp.send(null);
}
