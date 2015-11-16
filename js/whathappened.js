/**
 * Created by i68066 on 11/16/15.
 */
$('#myForm').submit(function(e){
    e.preventDefault();
    var url = $(this).attr('action')+'?'+$('#myForm').serialize();
    $('#demo').html('<a href="'+url+'"> Link </a>');
});