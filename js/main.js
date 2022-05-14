$( document ).ready(function() {

    var titlesJsonPath = '/data/titles.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            
            $(".compat-container").append(val['name'] + '</br>');
            $(".compat-container").append(val['title_id'] + '</br>');

        });
    });

});