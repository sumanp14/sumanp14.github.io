function search_email(){
    // Removing validation error in previous case where 
    // validation failed
        $('.txt_box').focus(function(){
            if( $(this).hasClass('email-err') ){
                $(this).removeClass('email-err').next('.valid-msg').remove();
            } 
        })
        // 'Go' button click handler 
        $('.btn').on("click",function(){
             var th = $('.txt_box');
             em = th.val();
                // email validation
                if(IsEmail(em)){
                    location.href=location.href.replace('index','FE_pg2');
                    if( th.hasClass('email-err') ){
                        th.removeClass('email-err').next('.valid-msg').remove();
                    }
                    // store the data fetched 
                    localStorage.setItem("em",em);
                } 
                else{
                    $('.txt_box').addClass('email-err').after("<div class='valid-msg'>Please add a valid email address</div>")
                } 
        });
        //check if email matches a valid email pattern
        function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            return false;
        }else{
            return true;
        }
        }
}    