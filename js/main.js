$( document ).ready(function() {

    var titlesJsonPath = '/data/titles.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            
            var imageHtml = '<img class="img-fluid lazy" title="' + val['name'] + '" src="/titles/' + val['title_id'] + '_front.jpg" style="">';
            $(".compat-container").append(imageHtml);           

        });
    });

});