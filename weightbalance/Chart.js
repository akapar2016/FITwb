
    var ctx = document.getElementById('wbChart').getContext('2d');
    let wbChart = new Chart(ctx, {
        type: 'scatter',
        data: 0,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        suggestedMin: 82,
                        suggestedMax: 93
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 1200,
                        suggestedMax: 3800
                    }
                }]
            }
        }
    });


function createAircraftLayout(annimate) {
    annimate = (typeof annimate !== 'undefined') ?  annimate : 1000;
    var ctx = document.getElementById('wbChart').getContext('2d');
    var scatterChartData = {
        datasets: [{
            label: 'Limits',
            borderColor: 'black',
            showLine: true,
            pointRadius: 1,
            tension: 0,
            data: [{
                x: aircraftType.Gfrontx,
                y: aircraftType.Gfronty
            }, {
                x: aircraftType.G1x,
                y: aircraftType.G1y
            }, {
                x: aircraftType.G2x,
                y: aircraftType.G2y
            }, {
                x: aircraftType.G3x,
                y: aircraftType.G3y
            }, {
                x: aircraftType.G4x,
                y: aircraftType.G4y
            }, {
                x: aircraftType.Gbackx,
                y: aircraftType.Gbacky
            }]
        }]
    };

    var optionsScales = {
            xAxes: [{
                ticks: {
                    suggestedMin: aircraftType.Gfrontx - 1,
                    suggestedMax: aircraftType.Gbackx + 1
                }
            }],
            yAxes: [{
                ticks: {
                    suggestedMin: aircraftType.Gfronty,
                    suggestedMax: aircraftType.G4y + 100
                }
            }]
    }
    wbChart.data = scatterChartData;
    wbChart.options.scales = optionsScales;
    wbChart.update(annimate);
}

function graphWbPoint(txVal, tyVal, lxVal, lyVal) {
    createAircraftLayout(0);
    console.log("graphTakeoffPoint");
    var tpoint = {
        label: "TakeOff",
        borderColor: 'blue',
        pointRadius: 10,
        data: [{
            x: txVal,
            y: tyVal
        }]
    }
    wbChart.data.datasets.push(tpoint);

    if (lxVal != 0) {
        var lpoint = {
            label: "Landing",
            borderColor: 'red',
            pointRadius: 10,
            data: [{
                x: lxVal,
                y: lyVal
            }]
        }
        wbChart.data.datasets.push(lpoint);
    }
    wbChart.update();
}
