$(document).ready(function(){
    
    // Focus and blur functions for the input placeholder text
    $('.test-input').focus(function(){ $(this).parent().addClass('active'); });
    $('.test-input').blur(function(){ if(!$(this).val()){$(this).parent().removeClass('active');} });
    
})