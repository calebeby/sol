Waves.attach('.button', 'waves-light');
Waves.attach('button', 'waves-light');
Waves.init();
var $textInput = 'input[type="color"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"],textarea'
$(function(){
  $($textInput).addClass('empty');
  $($textInput).focus(function() {
    $(this).addClass('visited');
  });
  $($textInput).on('change', function() {
    if ($(this).val() == '') {
      $($(this)).addClass('empty');
    } else {
      $($(this)).removeClass('empty');
    }
  });
});
