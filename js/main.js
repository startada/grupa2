/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var articleContentHalf = $('.article-container.half').find('.article-content');
    var title = $('.article-container.half h2');
    // var higherOneHeight = Number.MIN_VALUE;
    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
    });

    // $(window).on('load',function(){
    // articleContentHalf.each(function(index) {
    //     var height = $(this).height();
    //     if(height>higherOneHeight){
    //         higherOneHeight = height;
    //     }
    // });
    // articleContentHalf.height(higherOneHeight);

    // });

    $(window).on('load', function() {
        //utilities.EqualizeElementsHeightByRow(articleContentHalf);
        $(this).trigger('resize');

    });

    $(window).resize($.throttle(250, function() {

        utilities.EqualizeElementsHeightByRow('h2');
        utilities.EqualizeElementsHeightByRow(articleContentHalf);
    }));

    footerContainer.load('footer.html');
    utilities.MoveExistingImagesToContainerBackgroundCover();
}());
