/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/11/2018
 * Time: 6:12 PM
 */
"use strict";

(function() {
    var racun = null;

    $.ajax({
        url    : 'js/data/racuni.json',
        success: function(data) {
            racun = data;
            console.log(izracunajZaradu());
        },
        error  : function(data) {
            console.log('ERROR', data);
        }
    });

    function izracunajZaradu() {
        var total = 0;
        var racuniCount = racun.length;
        for(var j = 0; j < racuniCount; j++) {
            var currentRacun = racun[j];
            var stavkeCount = currentRacun.stavke.length;
            for(var i = 0; i < stavkeCount; i++) {
                var currentUsluga = currentRacun.stavke[i];


                total = total + (currentUsluga.radnihSati * currentUsluga.cenaPoSatu);
            }
        }
        return total;

    }

}());