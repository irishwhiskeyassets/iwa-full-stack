function contactForm() {
    
    // var frm = $('#contact-form');
    var frm = document.getElementById('contact-form');
    if (!frm.checkValidity()) {
        errorMessage.style.display = 'block';
        console.log('whoaa');
    } else {
    $('#contact-form').submit(function (ev) {
        ev.preventDefault();
        $('#contact-form').css('display', 'none');
        $('#contact-confirmation').css('display', 'block');
        $.ajax({
            type: 'POST',
            url: '/api/form/contact',
            data: $('#contact-form').serialize(),
            success: function (data) {
                return data;
            }
        });
    });
}
};