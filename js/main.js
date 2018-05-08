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
    var comments = $('.comment');
    var avatar = comments.find('.avatar');
    var carousel = $('.owl-carousel');
    var newCommentForm = $('#new-comment');

    var contentSwitcherButton = $('.show-more');

    // var higherOneHeight = Number.MIN_VALUE;
    /**
     * events
     */
    if(utilities.IsExisty(carousel)){
        carousel.owlCarousel({
            nav               : true,
            navText           : ["sta", "rad"],
            navSpeed          : 1400,
            dotsSpeed         : 1400,
            dragEndSpeed      : 1400,
            dots              : true,
            margin            : 10,
            items             : 1,
            singleItem        : true,
            autoplay          : true,
            autoplayTimeout   : 4500,
            autoplaySpeed     : 1400,
            loop              : true,
            autoplayHoverPause: true
        });
    }

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

                $(this).find('a').append('<div class="generic">' + splitNameToInitials(name) + '</div>');
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

    newCommentForm.submit(function(){
        console.log('click');
        var data = JSON.stringify($(this).serializeArray());
        $.ajax({
            method:'post',
            data:data,
            url:'https://jsonplaceholder.typicode.com/posts',
            success:function(data1){
                console.log(data1);
            },
            error:function(data){
                console.log('ERROR',data);

            }
        })
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

    $.ajax({
        method: 'get',

        dataType: 'json',
        url     : 'https://jsonplaceholder.typicode.com/posts/1/comments',
        success : function(data) {

            for(var i = 0; i < 2; i++) {
                var nameFullArray  = data[i].name.split(' ');
                var name = nameFullArray[0]+' '+nameFullArray[1];
                var body = data[i].body;
                $(comments.eq(i)).find('h5').html(name);
                $(comments.eq(i)).find('p').html(body);

            }


        },
        error   : function(data) {
            console.log('ERROR', data);
        }
    });
}());

var racun;