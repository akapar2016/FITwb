
function loadUpInitValues(aircraftType) {
    document.getElementById("ASeat12").innerHTML = aircraftType.Seat12;
    document.getElementById("ASeat34").innerHTML = aircraftType.Seat34;
    document.getElementById("ACargo").innerHTML = aircraftType.ACargo;
    document.getElementById("AFuel").innerHTML = aircraftType.AFuel;
    document.getElementById("FuelQuantity").innerHTML = aircraftType.FuelQuantity;

}
