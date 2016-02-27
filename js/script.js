$(document).ready(function () {

  var container = $('#container');
  for(var i=1;i<=5;i++) {
    $(container).append('<div class="glp-header"> .o .o-'+i+'x</div>');
    for(var j=0; j<=36; j++)
      $(container).append('<div class="glp"><span class="o o-'+i+'x-'+j*10+'"></span><p class="glp-text">o o-'+i+'x-'+j*10+'</p></div>');
  }

  // bind events o1
  $('#i1-1').change(function () {
    $('#o1-1').attr('class', 'o o-progress-'+$(this).val());
  });
  $('#i1-2').change(function () {
    $('#o1-2').attr('class', $(this).val());
  });
  $('#i1-3').change(function () {
    $('#o1-3').text($(this).val());
  });

});
