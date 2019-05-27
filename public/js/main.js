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
            dots:true,
            adaptiveHeight: true
        });
    });
    

// Radio buttons clicked

function radioClicked(event){
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

submitButton.addEventListener('click', function (event) {
    if(validateForm()){
        console.log('Good form');
    } else {
        console.log('Bad form');
    }
})



function validateForm(){
    valid = true;
    $('input[type="text"]').each(function(){
        if($(this).val() == ''){
            errorMessage.style.display = 'block';
            return false;
        }
    })

    if(!$('input[type="radio"]').is(':checked')) { 
        errorMessage.style.display = 'block';
        return false;
    }

return valid;
}
