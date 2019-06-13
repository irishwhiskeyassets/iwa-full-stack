//Hamburger functionality
$(document).ready(function () {
    $(".hamburger-container").click(function () {
        $(".hamburger").toggleClass("is-active");
        $(".mobile-menu").toggleClass("menu-active");
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


function readMore(){
    var hiddenParagraph = document.getElementById('hiddenParagraph');
    hiddenParagraph.classList.remove('hide-p');
    $('.read-more').addClass('hide-p');
    $('.read-more-overlay').addClass('hide-p');
}



