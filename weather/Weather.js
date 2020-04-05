
//Access-Control-Allow-Origin: https://www.aviationweather.gov;
function getDepWeather(icao) {
    var url = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=' + icao + '&hoursBeforeNow=1'
    var xhttp = new XMLHttpRequest();
    var xmlParser = new DOMParser();
    var xmlData;

    
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "https://www.aviationweather.gov");

    xhttp.setRequestHeader('Content-Type', 'application/xml');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             xmlData = xmlParser.parseFromString(this.responseText);
        }
    }
    xhttp.send(null);

    document.getElementById("DWeatherTime").innerHTML = xmlData;
}