$( document ).ready(function() {

    var titlesJsonPath = '/data/titles.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            
            var html = '<div class="col mb-4 title-card">'
            html += '<div class="mx-auto title-card-container">'
            html += '<div class="title-card-image-container">'

            html += '<img class="img-fluid lazy" title="' + val['name'] + '" src="/titles/' + val['title_id'] + '_front.jpg" style=""><br/>';
         
            html += '</div>'
            html += '<div class="fill-playable card-body text-center py-1 my-0"><small><strong>Playable</strong></small></div>'
            html += '</div>'
            html += '</div>'
            $(".results").append(imageHtml);           

        });
    });

});