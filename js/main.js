$(document).ready(function(){

  var submenu_active = false;
  var menu_active = false;






  function hideAll(){
    $('#safety-drop').hide();
    $('#risk-drop').hide();
    $('#JM-drop').hide();
    // $('#amer-submenu').hide();
    // $('#apac-submenu').hide();
    // $('#emea-submenu').hide();
    // $('#ehs-submenu').hide();
    // $('#bus-submenu').hide();
    // $('#PG-submenu').hide();



    //$('#next-submenu').hide();

  //  $('.dropdown-submenu').hide();

  }
  hideAll()

$(document).on('click','#safety-btn',function(){
  $('.dropdown-submenu').hide();
  $('#risk-drop').hide();

  $('#safety-drop').toggle();

  if(  $('.safe-nav-col').hasClass('drop-back-active')){
    $('.safe-nav-col').removeClass('drop-back-active');
    $('.JM-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').removeClass('drop-back-active');
  }
  else{
    $('.JM-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').removeClass('drop-back-active');
    $('.safe-nav-col').addClass('drop-back-active');
  }

});

$(document).on('click','#risk-btn',function(){

  $('.dropdown-submenu').hide();
  hideAll();
  $('#risk-drop').toggle();

  if(  $('.risk-nav-col').hasClass('drop-back-active')  ){
      $('.safe-nav-col').removeClass('drop-back-active');
      $('.JM-nav-col').removeClass('drop-back-active');
      $('.risk-nav-col').removeClass('drop-back-active');
  }
  else{
    $('.safe-nav-col').removeClass('drop-back-active');
    $('.JM-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').addClass('drop-back-active');
  }



});

$(document).on('click','#JM-btn',function(){
  $('.dropdown-submenu').hide();
  hideAll();
  $('#JM-drop').toggle();

  if(  $('.safe-nav-col').hasClass('drop-back-active')){
    $('.safe-nav-col').removeClass('drop-back-active');
    $('.JM-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').removeClass('drop-back-active');

  }
  else{
    $('.safe-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').removeClass('drop-back-active');
    $('.JM-nav-col').addClass('drop-back-active');
  }

});


$(document).on('click','#amer-link',function(){

  $('#amer-submenu').toggle();
  $('.dropdown-submenu').not('#amer-submenu').hide()


});

$(document).on('click','#apac-link',function(){
  $('#apac-submenu').toggle();
  $('.dropdown-submenu').not('#apac-submenu').hide()


});


$(document).on('click','#emea-link',function(){
  $('#emea-submenu').toggle();
  $('.dropdown-submenu').not('#emea-submenu').hide()


});


$(document).on('click','#ehs-link',function(){
  $('#ehs-submenu').toggle();
  $('.dropdown-submenu').not('#ehs-submenu').hide()


});



$(document).on('click','#bus-link',function(){

  $('#bus-submenu').toggle();
  $('.dropdown-submenu').not('#bus-submenu').hide()


});

$(document).on('click','#PG-link',function(){

  $('#PG-submenu').toggle();
  $('.dropdown-submenu').not('#PG-submenu').hide()



});

$(document).on('click','#next-link',function(){

$('#next-submenu').toggle();
$('.dropdown-submenu').not('#next-submenu').hide()

});










})
