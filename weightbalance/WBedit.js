
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
 */
function loadUpIndValues() {
    console.log("loadUpIndValues: " + aircraftData.Tailnumber);
    
    document.getElementById("BEW").innerHTML = aircraftData.BEW;
    document.getElementById("Arm").innerHTML = aircraftData.Arm;
    document.getElementById("Moment").innerHTML = aircraftData.Moment;

}

/**
 * Load values that do not need calculations 
 */
function loadUpInitValues() {
    console.log("loadUpInitValues: " + aircraftType.AircraftType);
    
    document.getElementById("ASeat12").innerHTML = aircraftType.ASeat12;
    document.getElementById("ASeat34").innerHTML = aircraftType.ASeat34;
    document.getElementById("ACargo").innerHTML = aircraftType.ACargo;
    document.getElementById("AFuel").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTaxi").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTrip").innerHTML = aircraftType.AFuel;
    document.getElementById("FuelQuantity").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("FuelQuantityTaxi").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("FuelQuantityTrip").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WSeat12").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WSeat34").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WCargo").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuel").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].disabled = false;
    document.getElementById("WFuelTrip").getElementsByTagName("input")[0].disabled = false;
}

function calculateSeat12(input) {
    document.getElementById("MSeat12").innerHTML = 
            (document.getElementById("ASeat12").innerText * input).toFixed(1);
    calculateWBTotals();
}

function calculateSeat34(input) {
    document.getElementById("MSeat34").innerHTML = 
            (document.getElementById("ASeat34").innerText * input).toFixed(1);
    calculateWBTotals();
}

function calculateBaggage(input) {
    document.getElementById("MCargo").innerHTML = 
            (document.getElementById("ACargo").innerText * input).toFixed(1);
    calculateWBTotals();
}

function calculateFuel(parentId, input) {
    if (parentId.charAt(0) == "W") {
        document.getElementById("MFuel").innerHTML = 
            (document.getElementById("AFuel").innerText * input).toFixed(1);
        document.getElementById("FuelQuantity").getElementsByTagName("input")[0].value = (input/6).toFixed(2);
    } else {
        document.getElementById("WFuel").getElementsByTagName("input")[0].value = input*6;
        document.getElementById("MFuel").innerHTML = 
            (document.getElementById("AFuel").innerText * (input * 6)).toFixed(1);
    }
    calculateWBTotals();
}

function calculateFuelTaxi(parentId, input) {
    if (parentId.charAt(0) == "W") {
        document.getElementById("MFuelTaxi").innerHTML = 
            (document.getElementById("AFuelTaxi").innerText * input).toFixed(1);
        document.getElementById("FuelQuantityTaxi").getElementsByTagName("input")[0].value = (input/6).toFixed(2);
    } else {
        document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].value = input*6;
        document.getElementById("MFuelTaxi").innerHTML = 
            (document.getElementById("AFuelTaxi").innerText * (input * 6)).toFixed(1);
    }
    calculateWBTotals();
}

function calculateFuelTrip(parentId, input) {
    if (parentId.charAt(0) == "W") {
        document.getElementById("MFuelTrip").innerHTML = 
            (document.getElementById("AFuelTrip").innerText * input).toFixed(1);
        document.getElementById("FuelQuantityTrip").getElementsByTagName("input")[0].value = (input/6).toFixed(2);
    } else {
        document.getElementById("WFuelTrip").getElementsByTagName("input")[0].value = input*6;
        document.getElementById("MFuelTrip").innerHTML = 
            (document.getElementById("AFuelTrip").innerText * (input * 6)).toFixed(1);
    }
    calculateWBTotals();
}

function calculateWBTotals() {
    console.log("calculateWBTotals");

    document.getElementById("WRamp").innerHTML = 
            (parseFloat(document.getElementById("BEW").innerText) +
            parseFloat(document.getElementById("WSeat12").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WSeat34").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WCargo").getElementsByTagName("input")[0].value) +
            parseFloat(document.getElementById("WFuel").getElementsByTagName("input")[0].value)).toFixed(1);
    if (document.getElementById("WRamp").innerHTML == "NaN")
        document.getElementById("WRamp").innerHTML = "--"; 

    document.getElementById("MRamp").innerHTML = 
            (parseFloat(document.getElementById("Moment").innerText) +
            parseFloat(document.getElementById("MSeat12").innerText) +
            parseFloat(document.getElementById("MSeat34").innerText) +
            parseFloat(document.getElementById("MCargo").innerText) +
            parseFloat(document.getElementById("MFuel").innerText)).toFixed(1);
    if (document.getElementById("MRamp").innerHTML == "NaN")
        document.getElementById("MRamp").innerHTML = "--"; 

    document.getElementById("ARamp").innerHTML = 
            (parseFloat(document.getElementById("MRamp").innerHTML) / 
            parseFloat(document.getElementById("WRamp").innerHTML)).toFixed(1);
    if (document.getElementById("ARamp").innerHTML == "NaN")
        document.getElementById("ARamp").innerHTML = "--"; 

    document.getElementById("WTakeOff").innerHTML = 
            (parseFloat(document.getElementById("WRamp").innerText) -
            parseFloat(document.getElementById("WFuelTaxi").getElementsByTagName("input")[0].value)).toFixed(1);
    if (document.getElementById("WTakeOff").innerHTML == "NaN")
        document.getElementById("WTakeOff").innerHTML = "--"; 

    document.getElementById("MTakeOff").innerHTML = 
            (parseFloat(document.getElementById("MRamp").innerText) -
            parseFloat(document.getElementById("MFuelTaxi").innerText)).toFixed(1);
    if (document.getElementById("MTakeOff").innerHTML == "NaN")
        document.getElementById("MTakeOff").innerHTML = "--"; 

    document.getElementById("ATakeOff").innerHTML = 
            (parseFloat(document.getElementById("MTakeOff").innerHTML) / 
            parseFloat(document.getElementById("WTakeOff").innerHTML)).toFixed(1);
    if (document.getElementById("ATakeOff").innerHTML == "NaN")
        document.getElementById("ATakeOff").innerHTML = "--"; 

    document.getElementById("WLanding").innerHTML = 
            (parseFloat(document.getElementById("WTakeOff").innerText) -
            parseFloat(document.getElementById("WFuelTrip").getElementsByTagName("input")[0].value)).toFixed(1);
    if (document.getElementById("WLanding").innerHTML == "NaN")
        document.getElementById("WLanding").innerHTML = "--"; 

    document.getElementById("MLanding").innerHTML = 
            (parseFloat(document.getElementById("MTakeOff").innerText) -
            parseFloat(document.getElementById("MFuelTrip").innerText)).toFixed(1);
    if (document.getElementById("MLanding").innerHTML == "NaN")
        document.getElementById("MLanding").innerHTML = "--"; 

    document.getElementById("ALanding").innerHTML = 
            (parseFloat(document.getElementById("MLanding").innerHTML) / 
            parseFloat(document.getElementById("WLanding").innerHTML)).toFixed(1);
    if (document.getElementById("ALanding").innerHTML == "NaN") {
        document.getElementById("ALanding").innerHTML = "--";                     
    } else {
        graphWbPoint(parseFloat(document.getElementById("ATakeOff").innerHTML),
                     parseFloat(document.getElementById("WTakeOff").innerHTML),
                     parseFloat(document.getElementById("ALanding").innerHTML),
                     parseFloat(document.getElementById("WLanding").innerHTML));
    }
}