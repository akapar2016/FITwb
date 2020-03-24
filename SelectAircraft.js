let aircraftIdUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/PlaneDate.json'
let aircrafTypetUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/AircraftTypeData.json'

let allAircraftData = JSON.parse(GetJson(aircraftIdUrl));
let aircraftTypeData = JSON.parse(GetJson(aircrafTypetUrl));
let aircraftData;
let aircraftType;


function GetJson(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}


function selectAircraft () {
    var aircraftId = document.getElementById("aircraftType").value;
    aircraftData = findAircraftData(aircraftId);
    aircraftType = findAircraftType(aircraftData.AircraftType);

    loadUpTableValues(aircraftData.AircraftType);

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

function loadUpTableValues(aircraftType) {
    document.getElementById("ASeat12").innerHTML = aircraftType.Seat12;
    document.getElementById("ASeat34").innerHTML = aircraftType.Seat34;
    document.getElementById("ACargo").innerHTML = aircraftType.ACargo;
    document.getElementById("AFuel").innerHTML = aircraftType.AFuel;
    document.getElementById("FuelQuantity").innerHTML = aircraftType.FuelQuantity;

}


