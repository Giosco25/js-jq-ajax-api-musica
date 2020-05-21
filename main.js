$(document).ready(function() {
	//Code
    // Handlebars
    var html_template = $('#entry-template').html();

    var template_function = Handlebars.compile(html_template);
    // Chiamata ajax per recupere i dati musicali
    $.ajax({
       'url':'https://flynn.boolean.careers/exercises/api/array/music',
       'method': 'GET',
       'success': function(data) {
           // console.log(data);
           // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
           var musica = data.response;
           // console.log(musica)
           var array_generi =[];
           // Ciclare quindi i dischi e ottenuti
           for (var i = 0; i < musica.length; i++) {

               var disco_corrente = musica[i];

               var genere_musicali = disco_corrente.genre;

               if (!array_generi.includes(genere_musicali)) {
                   array_generi.push(genere_musicali);

               }
               // per ognuno di essi disegnare in pagina una card utilizzando handlebars.
               var segnaposto = {
                   'poster' : disco_corrente.poster,
                   'titolo' : disco_corrente.title,
                   'artista': disco_corrente.author,
                   'anno' :  disco_corrente.year,
                   'genere': disco_corrente.genre
               }
               var html_generata = template_function(segnaposto);
               $('.cds-container').append(html_generata);
           }
           console.log(array_generi);
           for (var i = 0; i < array_generi.length; i++) {
               var generi_salvati = array_generi[i];

               var html_option = '<option value="' + generi_salvati + '">'+ generi_salvati + '</option>';

               $('#genre_music').append(html_option);
               console.log(generi_salvati);

           }
   }
 });
});

// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
$('#genre_music').change(function(){

  var genere_scelto = $(this).val();

 $('.cd').hide();

 $('.cd.' + genere_scelto).show();

});
