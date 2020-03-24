let aircraftIdUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/PlaneData.Json'
let aircrafTypetUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/AircraftTypeData.Json'

function GetJson(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

let allAircraftData = JSON.parse(GetJson(aircraftIdUrl));
let aircraftTypeData = JSON.parse(GetJson(aircrafTypetUrl));
let aircraftData;
let aircraftType;

var dropdown = document.getElementById("selectAircraft");
for (var i = 0; i < allAircraftData.length; i++) {
    dropdown.innerHTML = dropdown.innerHTML +
                '<option value="' + allAircraftData[i].Tailnumber + '">' + allAircraftData[i].Tailnumber + '</option>';

}

function selectAircraft () {
    var aircraftId = document.getElementById("aircraftType").value;
    aircraftData = findAircraftData(aircraftId);
    aircraftType = findAircraftType(aircraftData.AircraftType);

    loadUpInitValues(aircraftData.AircraftType);

}

function findAircraftData (aircraftId) {
    for (i in aircraftTypeData) {
        if (aircraftId = allAircraftDate[i].Tailnumber) {
            return allAircraftDate[i]
        }
    }
}

function findAircraftType (type) {
    for (i in aircraftTypeData) {
        if (type = aircraftTypeData[i].Tailnumber) {
            return aircraftTypeData[i]
        }
    }
}


