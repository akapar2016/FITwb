
function graphPoint(title, xVal, yVal) {
    console.log("graphPoint: " + title);
    var data = [];
    data.push({
        x: x,
        y: y
    });

    var scatterChartData = {
        datasets: [{
            label: title,
            borderColor: window.chartColors.red,
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            data: data
        }]
    };

    console.log("Graphing" + scatterChartData);
    //createGraph(title, scatterChartData);
}

function createGraph(title, data) {
    var ctx = document.getElementById('wbChart').getContext('2d');
    var scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: title,
                data: data
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Chart.js Scatter Chart'
            },
        }
    });
}