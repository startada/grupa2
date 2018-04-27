/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');
    var articleContentContainerHalf = $('.article-container');
    var articleContentHalf = articleContentContainerHalf.find('.article-content');
    var halfContainerImage = articleContentContainerHalf.find('.article-image');
    var title = articleContentContainerHalf.find('h2');
    var iconContent = '<i class="fa fa-search-plus"></i>';
    var name = 'milisav suljagic';
    var avatar = $('.comment').find('.avatar');
    console.log(avatar.length);

    var contentSwitcherButton = $('.show-more');

    // var higherOneHeight = Number.MIN_VALUE;
    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    halfContainerImage.each(function() {
        $(this).append(iconContent);
    });

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



    $(window).on('load', function() {
        //utilities.EqualizeElementsHeightByRow(articleContentHalf);
        $(this).trigger('resize');

        avatar.each(function() {
            var image = $(this).find('img');
            if(image.length === 0){
                var name = $(this).parent().find('h5').html();

                $(this).find('a').append('<div class="generic">'+ splitNameToInitials(name) +'</div>');
            }

        })

    });

    $(window).resize($.throttle(250, function() {

        utilities.EqualizeElementsHeightByRow('h2');
        utilities.EqualizeElementsHeightByRow(articleContentHalf);
    }));

    contentSwitcherButton.click(function() {
        var content = $(this).html();

        if(content === 'Load More '){
            content = 'Show Less ';
        }
        else {
            content = 'Load More ';
        }

        $(this).html(content);
        $('.switch-container').toggleClass('opened');
        $(this).toggleClass('opened');
    });

    footerContainer.load('footer.html');
    utilities.MoveExistingImagesToContainerBackgroundCover();

    function splitNameToInitials(fullName) {
        var splitted = fullName.split(' ');
        var inicijal = '';
        for(var i = 0; i < splitted.length; i++) {
            if(i < 2){
                inicijal += splitted[i][0].toUpperCase();
            }

        }
        return inicijal;
    }

    splitNameToInitials(name);
}());

