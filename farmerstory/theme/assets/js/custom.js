/* Code for finding css transition-transform location of image
document.getElementById('imgpos').onclick = function clickEvent(e) {
var rect = e.target.getBoundingClientRect();
var x = e.clientX - rect.left; //x position within the element.
var y = e.clientY - rect.top;  //y position within the element.
alert((((((rect.right/2)-e.clientX)*100)/rect.right))+'%,'+(((((rect.bottom/2)-e.clientY)*100)/rect.bottom))+'%');;
}
 */
 $(document).ready(function() {
    $.post('/tool/content-swap', {"id": $('.replace_body_on_load').data('id'), "body": $('.replace_body_on_load').html()}, function(data) {
        $('.replace_body_on_load').html(data.body);
    }, 'json');

   $('#search-box').on('shown.bs.modal', function () {
      $('#q').trigger('focus');
      $('.fancybox-close').trigger('click');
   })
});
