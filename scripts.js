$(document).ready(function(){
    "use strict";
    setInterval(function(){
        var carousels = $('.carousel');
        carousels.each(function(key,elem){
            if($(elem).find('.active').length && $(elem).find('.active').next('.slide').length){
                $(elem).find('.active').removeClass('active').next('.slide').addClass('active');
            }else{
                $(elem).find('.slide').first().addClass('active');
            }
        });
    },4000);
});