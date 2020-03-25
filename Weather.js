
function getDepWeather(icao) {
    var url = 'https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=' + icao + '&hoursBeforeNow=1'
    var xhttp = new XMLHttpRequest();
    var xmlParser = new DOMParser();
    var xmlData;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlData = xmlParser.parseFromString(this.responseText);
        }
    }

    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();

    document.getElementById("DWeatherTime").innerHTML = xmlData;
}