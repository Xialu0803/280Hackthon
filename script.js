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
        values: [1990, 2020],
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