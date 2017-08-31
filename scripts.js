$(document).ready(function(){
    "use strict";
    setInterval(function(){
        var carousels = $('.carousel');
        carousels.each(function(key,elem){
            var active;
            if($(elem).find('.active').length && $(elem).find('.active').next('.slide').length){
                active = $(elem).find('.active').removeClass('active').next('.slide').addClass('active');
            }else{
                $(elem).find('.active').removeClass('active');
                active = $(elem).find('.slide').first().addClass('active');
            }

            //active.css({
            //    transform:'rotate('+((Math.random()*40)-20)+'deg)'
            //})
        });
    },4000);
});