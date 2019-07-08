function contactForm(){
    console.log("Sick");
    $("#contact-form").submit(function(e){
        console.log("form here")
        e.preventDefault();
        var formData = new FormData();
        $.ajax({
            url: '/api/form/contact',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                return console.log('Contact Form');
            }
        });
    });
}