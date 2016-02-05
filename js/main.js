Waves.attach('.button', 'waves-light');
Waves.attach('button', 'waves-light');
Waves.attach('input[type="button"]', 'waves-light');
Waves.attach('input[type="submit"]', 'waves-light');
Waves.attach('input[type="reset"]', 'waves-light');
Waves.init();
$(function(){
  if($('input[type="text"]').val() === "") {
    $(this).addClass(".empty");
  } else {
    $(this).removeClass(".empty");
  }
});
