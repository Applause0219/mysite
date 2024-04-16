/* chart*/
function _chart ()
{
    $('.b-skills').appear(function() {
        setTimeout(function() {
            $('.chart').easyPieChart({
                easing: 'easeOutElastic',
                delay: 3000,
                barColor: '#369670',
                trackColor: '#E4EDF6',
                scaleColor: false,
                lineWidth: 30,
                trackWidth: 30,
                size: 250,
                lineCap: 'round',
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
        }, 200);
    });
};
$(document).ready(function() {
    run(_chart);
});