$(document).ready(function(){
    $( "#tabs" ).tabs();
    
    //Form Submit
    var check = true;
    $("#basic-form").submit(function(e){
        var email = $("#basic-form input[name='email']").val();
        e.preventDefault();

        var self = this;
        
        $.ajax({
            type: "GET",
            url: "/searching?email=" + email,
            cache: false
        }).done(function(result) {
            if (result == "match") {
                if($(self).attr('action') == "/editmember")
                {
                    //alert(result);
                    self.submit();
                }
                else{
                    alert('Email Address already exist, Please use different Email Address');    
                }
                
            } else {
                //alert(result);
                self.submit();
                //return true;
            }
        }).fail(function(xhr, textStatus, errorThrown) {
            alert(xhr.textStatus);
        });

    });
});