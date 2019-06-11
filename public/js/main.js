//Hamburger functionality
$(document).ready(function () {
    $(".hamburger-container").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".mobile-menu").toggleClass("menu-active");
    });
});


$(document).ready(function () {
    $('.carousel-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: true
    });
});


// Radio buttons clicked

function radioClicked(event) {
    var bundleClicked = event.currentTarget.id;
    switch (bundleClicked) {
        case 'bronze':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $('span').removeClass("selectedCheckmark");
            $("#" + bundleClicked + 'Checkmark').addClass("selectedCheckmark");
            $("#" + bundleClicked + 'Radio').prop("checked", true);
            break;

        case 'silver':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $('span').removeClass("selectedCheckmark");
            $("#" + bundleClicked + 'Checkmark').addClass("selectedCheckmark");
            $("#" + bundleClicked + 'Radio').prop("checked", true);
            break;

        case 'gold':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $('span').removeClass("selectedCheckmark");
            $("#" + bundleClicked + 'Checkmark').addClass("selectedCheckmark");
            $("#" + bundleClicked + 'Radio').prop("checked", true);
            break;

        case 'diamond':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $('span').removeClass("selectedCheckmark");
            $("#" + bundleClicked + 'Checkmark').addClass("selectedCheckmark");
            $("#" + bundleClicked + 'Radio').prop("checked", true);
            break;

        case 'platinum':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $('span').removeClass("selectedCheckmark");
            $("#" + bundleClicked + 'Checkmark').addClass("selectedCheckmark");
            $("#" + bundleClicked + 'Radio').prop("checked", true);
            break;
    }
}

// Submit Form

submitButton.addEventListener('click', function (event) {
    var form = document.getElementsByTagName('form');
    $("#imageURL").val(imageURL.imageUrl);
    if (!form[0].checkValidity()) {
        errorMessage.style.display = 'block';
    } else {
        purchaseForm.submit();
    }
})

// Prevent Default for Image Upload

var imageURL;

$("#cpa-form").submit(function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append('image', $('#image')[0].files[0]);
    $.ajax({
        url: '/api/form/upload_image',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            return imageURL = data;
        }
    });
});