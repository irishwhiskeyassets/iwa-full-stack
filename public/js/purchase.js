var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (event) {
    var form2 = document.getElementById('purchaseForm');
    if (!form2.checkValidity()) {
        errorMessage.style.display = 'block';
    } else {
        purchaseForm.submit();
    }
})

// Prevent Default for Image Upload
var imageURL;

function submitFirst(){
    $("#cpa-form").submit(function(e){
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
                return $("#imageURL").val(data.imageUrl);
            }
        });
    }).submit();
}

document.getElementById("image").onchange = () => submitFirst();