
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
    
	    Modals
	*/
    
    
    
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
        $('.blurbody').css("filter","blur(5px)"); 
		$( '#' + $(this).data('modal-id') ).modal();
	});
    
  	$('#gallery').on('click', function(e){
        $('.blurbody').css("filter","blur(5px)"); 
	});  
 
    
 $('.modal').on('hidden.bs.modal', function (e) {
        $('.blurbody').css("filter","blur(0px)");
    });
    
    $('#gallery').on('hidden.bs.modal', function (e) {
        $('.blurbody').css("filter","blur(0px)");
    });
    

    /*
        Form validation
    */
	$('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });

    
});

