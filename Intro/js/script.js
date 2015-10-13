$( document ).ready(function() { 
       $('.trigger').click(function(){ 
        $('#popup_layer, #overlay_t').show(); 
        $('#popup_layer').css("top", Math.max(0, $(window).scrollTop() + 100) + "px"); 
        // $('#popup_layer').css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px"); 
    }); 
    $('#overlay_t, .close').click(function(e){ 
        e.preventDefault(); 
        $('#popup_layer, #overlay_t').hide(); 
    }); 
});