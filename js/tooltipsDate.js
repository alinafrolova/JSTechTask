/**
 * Created by иарвар on 24.01.2017.
 */

var array = [];
function getCountMonth() {
    var collectionTooltips = document.querySelectorAll('span[class="spantooltip"]');
    for (var i = 0; i < collectionTooltips.length; i++) {
        var tooltip = collectionTooltips[i].innerText;
        array = tooltip.split (" of ");
        var months = getDate(array);
        var addingmoth = collectionTooltips[i].appendChild(document.createTextNode(" I worked "+ months + " months"));
    };

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
