$(document).ready(function() {
  //se oculta todas las demas vistas menos la de inicio al cargar la pagina
  $('.about-us').hide();
  $('.contact-us').hide();
  $('.validation').hide();
  //al hacer click en el boton inicio, se ocultan las demas vistas
  $('.btn-init').click(function() {
    $('.init').show();
    $('.contact-us').hide();
    $('.about-us').hide();
    $('.validation').hide();
  });
  //al hacer click en el boton valida tu web, se ocultan las demas vistas
  $('.btn-validation').click(function() {
    $('.validation').show();
    $('.init').hide();
    $('.about-us').hide();
    $('.contact-us').hide();
  });
  //al hacer click en el boton sobre nosotros, se ocultan las demas vistas
  $('.btn-about').click(function() {
    $('.about-us').show();
    $('.contact-us').hide();
    $('.init').hide();
    $('.validation').hide();
  
  });
  //al hacer click en el boton contacto, se ocultan las demas vistas
  $('.btn-contac').click(function() {
    $('.contact-us').show();
    $('.init').hide();
    $('.about-us').hide();
    $('.validation').hide();
  });
 

/*
$(document).ready(function() {
  $('.search').click(function(e) {
    let url = ($('.info-search').val());
    $('.info-search').val('');
    getUrl(url);
    e.preventDefault();
    console.log(url);
  });
});

function getUrl(url) {
  $.ajax({
    url: `http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=https://${url}&key=4c693cb3-c9c2-4eea-bd01-548aee390bf1`,
    type: 'GET', // aca va si sube o baja get o post
    datatype: 'json'
  })
    .done(function(resultado) { // parametro
       console.log(resultado);
      //showInfo(response);
    })
    .fail(function() {
      console.log('error en conexión a API');
    });
  }
  */
});
$('.search').click(function(){
  let url = ($('.info-search').val());
  console.log(url);
   
  fetch('http://observatorioweb.ups.edu.ec/oaw/srv/wcag/json/conformidad/?url=http://' + url + '&key=4c693cb3-c9c2-4eea-bd01-548aee390bf1' )
  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data.oaw.resultado.principios);
    $('.data').append(`<div class="row"><div class="col-md-3 col-sm-6 col-xs-12 float-shadow">        
        <div class="price_table_container">
          <div class="price_table_heading">Perceptible</div>
          <div class="price_table_body">
            <div class="price_table_row cost warning-bg"><strong>${data.oaw.resultado.resumen.totalPerceptible}</strong></div>
            <div class="price_table_row">${data.oaw.resultado.principios[0].descripcion}</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12 float-shadow">        
        <div class="price_table_container">
          <div class="price_table_heading">Operable</div>
          <div class="price_table_body">
            <div class="price_table_row cost warning-bg"><strong>${data.oaw.resultado.resumen.totalOperable}</strong></div>
            <div class="price_table_row">${data.oaw.resultado.principios[1].descripcion}</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12 float-shadow">        
        <div class="price_table_container">
          <div class="price_table_heading">Comprensible</div>
          <div class="price_table_body">
            <div class="price_table_row cost warning-bg"><strong>${data.oaw.resultado.resumen.totalComprensible}</strong></div>
            <div class="price_table_row">${data.oaw.resultado.principios[2].descripcion}</div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12 float-shadow">        
        <div class="price_table_container">
          <div class="price_table_heading">Robusto</div>
          <div class="price_table_body">
            <div class="price_table_row cost warning-bg"><strong>${data.oaw.resultado.resumen.totalRobusto}</strong></div>
            <div class="price_table_row">${data.oaw.resultado.principios[3].descripcion}</div>
          </div>
        </div>
      </div></div>`)
  })
  .catch(function(error){
    console.log('error en conexión a API')
    $('.error').append(`<div class="alert alert-danger" role="alert">
    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
    <span class="sr-only">Error:</span>
    Ingrese una url valida
    </div>`)
  })
});