/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 5/15/2018
 * Time: 7:27 PM
 */
"use strict";

(function() {
    function salji() {
        $.ajax({
            url   : 'processor.php',
            method: 'POST',
            dataType:'json',
            data  : {
                treci  : 'neki treci',
                cetvrti: 'evo ga zadnji'
            },
            success:function(data){
                console.log(data);
            },
            error:function(data){
                console.log('ERROR', data);
            }
        });
    }
    salji();
}());