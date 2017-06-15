/**
 * Created by ÷‹ŸªŸª on 2017/6/14.
 */
$(function(){
    $("#section2 .tec-pic").on("click", function () {
       if($('#section .introduction').hasClass('on')){
           return false;
       }
        $('#section .introduction').addClass('on');

    });
})