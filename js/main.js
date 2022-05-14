$( document ).ready(function() {

    $(".compat-container").html("Hello <b>world</b>!");

    var titlesJsonPath = '/data/titles.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            
            $(".compat-container").append(val['name'] + '</br>');
            $(".compat-container").append(val['title_id'] + '</br>');

        });
    });

});