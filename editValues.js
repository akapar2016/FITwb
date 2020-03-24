
/**
 * Populate Dropdown with each aircraft
 */
var dropdown = document.getElementById("selectAircraft");
for (var i = 0; i < allAircraftData.length; i++) {
    dropdown.innerHTML = dropdown.innerHTML +
                '<option value="' + allAircraftData[i].Tailnumber + '">' + allAircraftData[i].Tailnumber + '</option>';
}

/**
 * Load values from Ind data
 * @param {aircraftData} aircraftData 
 */
function loadUpIndValues(aircraftData) {
    document.getElementById("BEW").innerHTML = aircraftData.BEW;
    document.getElementById("Arm").innerHTML = aircraftData.Arm;
    document.getElementById("Moment").innerHTML = aircraftData.Moment;
}

/**
 * Load values that do not need calculations 
 * @param {aircraftType} aircraftType 
 */
function loadUpInitValues(aircraftType) {
    document.getElementById("ASeat12").innerHTML = aircraftType.ASeat12;
    document.getElementById("ASeat34").innerHTML = aircraftType.ASeat34;
    document.getElementById("ACargo").innerHTML = aircraftType.ACargo;
    document.getElementById("AFuel").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTaxi").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTrip").innerHTML = aircraftType.AFuel;
    document.getElementById("FuelQuantity").innerHTML = "Fuel - " + aircraftType.AFuelQuantity;
    document.getElementById("WSeat12").getElementsByTagName("input")[0].disabled = false;

}


function clearValues() {
    document.getElementById("ASeat12").innerHTML = "";
    document.getElementById("ASeat34").innerHTML = "";
    document.getElementById("ACargo").innerHTML = "";
    document.getElementById("AFuel").innerHTML = "";
    document.getElementById("AFuelTaxi").innerHTML = "";
    document.getElementById("AFuelTrip").innerHTML = "";
    document.getElementById("FuelQuantity").innerHTML = "Fuel - " + "";
    document.getElementById("BEW").innerHTML = "";
    document.getElementById("Arm").innerHTML = "";
    document.getElementById("Moment").innerHTML = "";
}

function calculateSeat12(input) {
    document.getElementById("MSeat12").innerHTML = 
    document.getElementById("ASeat12").innerText * input;
}