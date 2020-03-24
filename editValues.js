
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
    document.getElementById("WSeat34").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WCargo").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuel").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuelTrip").getElementsByTagName("input")[0].disabled = false;


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
    document.getElementById("WSeat12").getElementsByTagName("input")[0].disabled = true;
    document.getElementById("WSeat34").getElementsByTagName("input")[0].disabled = true;
    document.getElementById("WCargo").getElementsByTagName("input")[0].disabled = true;
    document.getElementById("WFuel").getElementsByTagName("input")[0].disabled = true;
    document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].disabled = true;
    document.getElementById("WFuelTrip").getElementsByTagName("input")[0].disabled = true;
}

function calculateSeat12(input) {
    document.getElementById("MSeat12").innerHTML = 
            document.getElementById("ASeat12").innerText * input;
    calculateTotals();
}

function calculateSeat34(input) {
    document.getElementById("MSeat34").innerHTML = 
            document.getElementById("ASeat34").innerText * input;
    calculateTotals();
}

function calculateBaggage(input) {
    document.getElementById("MCargo").innerHTML = 
            document.getElementById("ACargo").innerText * input;
    calculateTotals();
}

function calculateFuel(input) {
    document.getElementById("MFuel").innerHTML = 
            document.getElementById("AFuel").innerText * input;
    calculateTotals();
}

function calculateFuelTaxi(input) {
    document.getElementById("MFuelTaxi").innerHTML = 
            document.getElementById("AFuelTaxi").innerText * input;
    calculateTotals();
}

function calculateFuelTrip(input) {
    document.getElementById("MFuelTrip").innerHTML = 
            document.getElementById("AFuelTrip").innerText * input;
    calculateTotals();
}

function calculateTotals() {
    document.getElementById("WRamp").innerHTML = 
            parseFloat(document.getElementById("BEW").innerText) +
            parseFloat(document.getElementById("WSeat12").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WSeat34").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WCargo").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WFuel").getElementsByTagName("input")[0].value);

    document.getElementById("MRamp").innerHTML = 
            parseFloat(document.getElementById("Moment").innerText) +
            parseFloat(document.getElementById("MSeat12").innerText) +
            parseFloat(document.getElementById("MSeat34").innerText) +
            parseFloat(document.getElementById("MCargo").innerText) +
            parseFloat(document.getElementById("MFuel").innerText);

    document.getElementById("ARamp").innerHTML = 
            parseFloat(document.getElementById("MRamp").innerHTML) / 
            parseFloat(document.getElementById("WRamp").innerHTML);

    document.getElementById("WTakeOff").innerHTML = 
            parseFloat(document.getElementById("WRamp").innerText) -
            parseFloat(document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].value);

    document.getElementById("MTakeOff").innerHTML = 
            parseFloat(document.getElementById("MRamp").innerText) -
            parseFloat(document.getElementById("MFuelTaxi").innerText);

    document.getElementById("ATakeOff").innerHTML = 
            parseFloat(document.getElementById("MTakeOff").innerHTML) / 
            parseFloat(document.getElementById("WTakeOff").innerHTML);
    
    document.getElementById("WLanding").innerHTML = 
            parseFloat(document.getElementById("WTakeOff").innerText) -
            parseFloat(document.getElementById("WFuelTrip").getElementsByTagName("input")[0].value);

    document.getElementById("MLanding").innerHTML = 
            parseFloat(document.getElementById("MTakeOff").innerText) -
            parseFloat(document.getElementById("MFuelTrip").innerText);

    document.getElementById("ALanding").innerHTML = 
            parseFloat(document.getElementById("MLanding").innerHTML) / 
            parseFloat(document.getElementById("WLanding").innerHTML);
}