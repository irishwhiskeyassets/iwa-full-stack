//Hamburger functionality
$(document).ready(function () {
    $(".hamburger-container").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".mobile-menu").toggleClass("menu-active");
    });
});


// $(document).ready(function () {
//     $('.carousel-container').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         dots: true,
//         adaptiveHeight: true
//     });
// });


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

// document.getElementById("file").onchange = function() {
//     document.getElementById("form").submit();
// };


var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
    var form2 = document.getElementById('purchaseForm');
    $("#imageURL").val(imageURL.imageUrl);
    if (!form2.checkValidity()) {
        errorMessage.style.display = 'block';
    } else {
        purchaseForm.submit();
    }
})

// Prevent Default for Image Upload

function submitFirst(){
    var imageURL;
    console.log('First');
    $("#cpa-form").submit(function(e) {
        console.log('heeeey');
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
                console.log(data);
                return imageURL = data;
            }
        });
    });
}

document.getElementById("image").onchange = () => submitFirst();

function testConor(){
    console.log('hey');
}


function readMore(){
    var hiddenParagraph = document.getElementById('hiddenParagraph');
    hiddenParagraph.classList.remove('hide-p');
    $('.read-more').addClass('hide-p');
    $('.read-more-overlay').addClass('hide-p');
}



