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
           console.log(data);
           // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
           var musica = data.response;
           console.log(musica)
           // Ciclare quindi i dischi e ottenuti
           for (var i = 0; i < musica.length; i++) {

               var ciclo_musica = musica[i];
               console.log(ciclo_musica);
               // per ognuno di essi disegnare in pagina una card utilizzando handlebars.
               var segnaposto = {
                   'poster' : ciclo_musica.poster,
                   'titolo' : ciclo_musica.title,
                   'artista': ciclo_musica.author,
                   'anno' :  ciclo_musica.year
               }
               var html_generata = template_function(segnaposto);
               $('.cds-container').append(html_generata);
           }
   }
 });
});

// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").

function myFunction() {
  var x = document.createElement("SELECT");
  x.setAttribute("id", "mySelect");
  document.body.appendChild(x);

  var z = document.createElement("option");
  z.setAttribute("name", "volvocar");
  var t = document.createTextNode("Volvo");
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
}
