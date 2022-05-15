$( document ).ready(function() {

    var index = 0;

    var titlesJsonPath = '/data/releases.json';
    $.getJSON(titlesJsonPath, function( data ) {
        $.each( data, function( key, val ) {
            
            var html = '<div class="col mb-4 title-card">'
            html += '<div class="mx-auto title-card-container">'
            html += '<div class="title-card-image-container">'
            html += '<img class="img-fluid lazy" title="' + val['name'] + '" src="/titles/' + val['title_id'] + '_front.jpg" style=""><br/>';
            html += '</div>'

            if ((index & 1) == 0) {
                html += '<div class="bg-success card-body text-center py-1 my-0"><small><strong>' + val['title_id'] + '<br/>' + val['region'] + '<br/>Working</strong></small></div>'
            } else {
                html += '<div class="bg-secondary card-body text-center py-1 my-0"><small><strong>' + val['title_id'] + '<br/>' + val['region'] + '<br/>Unknown</strong></small></div>'
            }

            html += '</div>'
            html += '</div>'
            $("#results").append(html);           

            index+=1;
        });
    });

});