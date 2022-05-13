$( document ).ready(function() {

    $(".compat-container").html("Hello <b>world</b>!");

    var titlesJsonPath = '/data/titles.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            console.log(val['name']);
        });
    });

});