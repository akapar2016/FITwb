
function loadUpInitValues(aircraftType) {
    document.getElementById("ASeat12").innerHTML = aircraftType.ASeat12;
    document.getElementById("ASeat34").innerHTML = aircraftType.ASeat34;
    document.getElementById("ACargo").innerHTML = aircraftType.ACargo;
    document.getElementById("AFuel").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTaxi").innerHTML = aircraftType.AFuel;
    document.getElementById("AFuelTrip").innerHTML = aircraftType.AFuel;
    document.getElementById("FuelQuantity").innerHTML = "Fuel - " + aircraftType.AFuelQuantity;

}




function clearValues() {
    document.getElementById("ASeat12").innerHTML = "";
    document.getElementById("ASeat34").innerHTML = "";
    document.getElementById("ACargo").innerHTML = "";
    document.getElementById("AFuel").innerHTML = "";
    document.getElementById("AFuelTaxi").innerHTML = "";
    document.getElementById("AFuelTrip").innerHTML = "";
    document.getElementById("FuelQuantity").innerHTML = "Fuel - " + "";
}