Waves.attach('.button', 'waves-light');
Waves.attach('button', 'waves-light');
Waves.init();
var $textInput = 'input[type="color"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"],textarea'
$(function(){
  var word;
  var loadQuery = function(query) {
    json = [];
    $.ajax({
      url: ("https://api.datamuse.com/words?ml=" + query),
      //force to handle it as text
      dataType: "text",
      success: function(data) {
        var obj = $.parseJSON(data);
        $.each(obj, function() {
          json.push(this['word']);
        });
        return json;
      }
    });
  }
  $($textInput).addClass('empty');
  $($textInput).focus(function() {
    $(this).addClass('visited');
  });
  $($textInput).on('change keyup keydown paste keypress', function() {
    if ($(this).val() == '') {
      $($(this)).addClass('empty');
    } else {
      $($(this)).removeClass('empty');
    }
    var json = loadQuery($(this).val();
    $('.results').html()[1]);
  });

});
