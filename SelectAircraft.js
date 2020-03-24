let aircraftIdUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/indAircraftData.json'
let aircrafTypetUrl = 'https://raw.githubusercontent.com/akapar2016/FITwb/master/AircraftTypeData.json'

function GetJson(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
/**
 * get all JSON data
 */
let allAircraftData = JSON.parse(GetJson(aircraftIdUrl));
let aircraftTypeData = JSON.parse(GetJson(aircrafTypetUrl));

/**
 * Identify Aircraft from dropdown
 */
function selectAircraft () {
    var aircraftId = document.getElementById("selectAircraft").options[document.getElementById("selectAircraft").selectedIndex].value.toString();
    var aircraftData = findAircraftData(aircraftId);
    var aircraftType = findAircraftType(aircraftData.AircraftType.toString());
    document.getElementById("test").innerHTML = aircraftId.toString();
    document.getElementById("test2").innerHTML = aircraftData.Tailnumber;
    loadUpIndValues(aircraftData);
    loadUpInitValues(aircraftType);
}

/**
 * Find aircraft JSON data fron ID
 * @param {String} aircraftId (Tail Num)
 */
function findAircraftData (aircraftId) {
    for (i in allAircraftData) {
        if (aircraftId.toString() == allAircraftData[i].Tailnumber.toString()) {
            return allAircraftData[i]
        }
    }
    return "err";
}

/**
 * Find Aircraft Type Data JSON from type
 * @param {string} type 
 */
function findAircraftType (type) {
    for (i in aircraftTypeData) {
        if (type == aircraftTypeData[i].AircraftType.toString()) {
            return aircraftTypeData[i]
        }
    }
}
