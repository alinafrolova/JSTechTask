/**
 * Created by иарвар on 24.01.2017.
 */
/*
var array = [];
var collectionTooltips = document.querySelectorAll('div[class="tooltip"]');
for (var i = 1; i < collectionTooltips.length; i++) {
    tooltip = collectionTooltips[i].getElementsByTagName('span').innerHTML;
    console.log(tooltip);
    array.split (tooltip);
};*/
(function () {
    function getCountMonth() {
        var dates = returnDates();
        var months = getDate( dates);
        return months;
    }
})
var array = [];
function returnDates() {

    var collectionTooltips = document.querySelectorAll('div[class="tooltip"]');
//noinspection JSAnnotator
    for (var i = 1; i < collectionTooltips.length; i++) {
        var tooltip = collectionTooltips[i].innerText;
        console.log(tooltip);
        array = tooltip.split (" of ");
    };
    return array;
}
function getDate(array) {
    var date1 = array[0],
        date2 = array[1];
    date1 = new Date( date1 );
    date2 = new Date( date2 );

    var months = date2.getMonth() - date1.getMonth();

    if ( months < 0 ) {
        months += 12;
        date2.setFullYear( date2.getFullYear() - 1 );
    }
    var years = date2.getFullYear() - date1.getFullYear();
    var countMonth = years *12 + months;
    return [ countMonth];
}



