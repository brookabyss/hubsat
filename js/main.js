$(document).ready(function(){

  var submenu_active = false;
  var menu_active = false;




  function hideAll(){
    $('#safety-drop').hide();
    $('#risk-drop').hide();
    // $('#amer-submenu').hide();
    // $('#apac-submenu').hide();
    // $('#emea-submenu').hide();
    // $('#ehs-submenu').hide();
    // $('#bus-submenu').hide();
    // $('#PG-submenu').hide();



    $('#next-submenu').hide();

  //  $('.dropdown-submenu').hide();

  }
  hideAll()

$(document).on('click','#safety-btn',function(){
  $('.dropdown-submenu').hide();
  $('#risk-drop').hide();

  $('#safety-drop').toggle();

  if(  $('.safe-nav-col').hasClass('drop-back-active')){
      $('.safe-nav-col').removeClass('drop-back-active');
      $('.risk-nav-col').removeClass('drop-back-active');

  }
  else{
    $('.risk-nav-col').removeClass('drop-back-active');
    $('.safe-nav-col').addClass('drop-back-active');
  }

});

$(document).on('click','#risk-btn',function(){

  $('.dropdown-submenu').hide();
  $('#safety-drop').hide();
  $('#risk-drop').toggle();



  if(  $('.risk-nav-col').hasClass('drop-back-active')  ){
      $('.safe-nav-col').removeClass('drop-back-active');
      $('.risk-nav-col').removeClass('drop-back-active');
  }
  else{
    $('.safe-nav-col').removeClass('drop-back-active');
    $('.risk-nav-col').addClass('drop-back-active');
  }



});


$(document).on('click','#amer-link',function(){
  $('.dropdown-submenu').hide();

  if(  $('#amer-submenu:visible')){
    console.log("hello")
    $('#amer-submenu').hide();
  }
  else{
      $('#amer-submenu').show();
  }






});

$(document).on('click','#apac-link',function(){
  $('.dropdown-submenu').hide();
  if(  $('#apac-submenu:visible')){
    console.log("hello")
    $('#apac-submenu').hide();
  }
  else{
      $('#apac-submenu').show();
  }






});


$(document).on('click','#emea-link',function(){
  $('.dropdown-submenu').hide();
  if(  $('#emea-submenu:visible')){
    console.log("hello")
    $('#emea-submenu').hide();
  }
  else{
      $('#emea-submenu').show();
  }







});


$(document).on('click','#ehs-link',function(){
  $('.dropdown-submenu').hide();
  if(  $('#ehs-submenu:visible')){
    console.log("hello")
    $('#ehs-submenu').hide();
  }
  else{
      $('#ehs-submenu').show();
  }






});



$(document).on('click','#bus-link',function(){
  $('.dropdown-submenu').hide();

  if(  $('#bus-submenu:visible')){
    console.log("hello")
    $('#bus-submenu').hide();
  }
  else{
      $('#bus-submenu').show();
  }






});

$(document).on('click','#PG-link',function(){
  $('.dropdown-submenu').hide();

    if(  $('#PG-submenu:visible')){
      console.log("hello")
      $('#PG-submenu').hide();
    }
    else{
        $('#PG-submenu').show();
    }





});

$(document).on('click','#next-link',function(){
  $('.dropdown-submenu').hide();
  console.log("hello",$('#next-submenu:visible').length)

  if(  $('#next-submenu:visible').length > 0){
console.log("visible")
    $('#next-submenu').hide();
  }
  else{
      $('#next-submenu').show();
  }




});










})
