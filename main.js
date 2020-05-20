$(document).ready(function() {
	//Code
    // Chiamata ajax per recupere i dati musicali
    var html_template = $('#entry-template').html();
    var template_function = Handlebars.compile(html_template);
    $.ajax({
       'url':'https://flynn.boolean.careers/exercises/api/array/music',
       'method': 'GET',
       'success': function(data) {
           console.log(data);
           // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
           var musica = data.response;
           console.log(musica)
           // Ciclare quindi i dischi e ottenuti
           for (var i = 0; i < musica.length; i++) {
               var ciclo_musica = musica[i];
               console.log(ciclo_musica);
               // per ognuno di essi disegnare in pagina una card utilizzando handlebars.
               $('.cds-container').append('<div class="cd"></div>').val(ciclo_musica);
       }
    })
});


// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
