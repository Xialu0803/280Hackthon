const accordion = document.getElementsByClassName('container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 1990,
        max: 2020,
        values: [1960, 2020],
        slide: function (event, ui) {
            $("#amount").val(+ ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val(+ $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data).cloneNode(true));
}

Highcharts.getJSON('http://localhost:3000/getgdps', function (data) {

    Highcharts.chart('chart1', {

        title: {
            text: 'GDP Current USD of Each Year'
        },

        yAxis: {
            title: {
                text: 'GDP Current USD'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1960 to 2020'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1960
            }
        },

        series: [{
            name: 'GDP',
            data: data
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 300
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}
);

Highcharts.getJSON('http://localhost:3000/getinflows', function (data) {

    Highcharts.chart('chart2', {

        title: {
            text: 'FDI Inflows Current USD of Each Year'
        },

        yAxis: {
            title: {
                text: 'FDI Inflows Current USD'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1960 to 2020'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1960
            }
        },

        series: [{
            name: 'INFLOWS',
            data: data
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 300
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}
);