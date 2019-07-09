function contactForm() {
    var frm = $('#contact-form');
    frm.submit(function (ev) {
        ev.preventDefault();
        $('#swapper').css('display', 'none');
        $.ajax({
            type: 'POST',
            url: '/api/form/contact',
            data: frm.serialize(),
            success: function (data) {
                return data;
            }
        });
    });
};