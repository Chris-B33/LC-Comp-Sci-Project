// Access CSV file data (change later)
//var csv = require('jquery-csv');

//$.get("data.csv", function(CSVdata) {
//      data = $.csv.toArray(CSVdata);
//})

let data = {
	"temperature": [21,21,20,22,23,22,21,24,23,22,23,24,26,27,25,23]
}

// Grab each column of data
let times = [];
for (let i=0; i < data["temperature"].length; i++) {
	times.push(i);
}
let temps = data["temperature"];
console.log(times, temps);


// Display each column to its appropriate container
var dataset1 = new Chart("temperature", {
	type: "line",
	data: {
		labels: times,
		datasets: [
			{
				label: "Current Temperature",
				data: temps
			}
		]
	},
	options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 30,
                    suggestedMin: 0,
                    stepSize: 5,
                    callback: function (value, index, values) {
                        return value + '℃'
                    }
                }
            }]
        }
    }
});

var dataset2 = new Chart("acceleration", {
	type: "line",
	data: {
		labels: times,
		datasets: [
			{
				label: "Current Acceleration",
				data: temps
			}
		]
	},
	options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 30,
                    suggestedMin: 0,
                    stepSize: 5,
                    callback: function (value, index, values) {
                        return value + '℃'
                    }
                }
            }]
        }
    }
});

var dataset3 = new Chart("direction", {
	type: "line",
	data: {
		labels: times,
		datasets: [
			{
				label: "Current Direction",
				data: temps
			}
		]
	},
	options: {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 30,
                    suggestedMin: 0,
                    stepSize: 5,
                    callback: function (value, index, values) {
                        return value + '℃'
                    }
                }
            }]
        }
    }
});