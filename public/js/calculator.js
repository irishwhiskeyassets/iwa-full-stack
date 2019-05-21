var interest = 1.02;
var margin = 0.1;
var investment = 0;

var slider1 = document.getElementById("slider-1");
var output1 = document.getElementById("caskNumber");
var result1 = document.getElementById("result-1")
var slider2 = document.getElementById("slider-2");
var output2 = document.getElementById("yearNumber");
var result2 = document.getElementById("result-2");

function selectOption(event) {
    var btn = event.srcElement.id;

    switch (btn) {
        case 'btn-1':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-1").addClass("active");
            $("#option-1").siblings().removeClass("active");
            interest = 1.02;
            margin = 0.1;
            setResults();
            break;

        case 'btn-2':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-2").addClass("active");
            $("#option-2").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.05;
            setResults();
            break;

        case 'btn-3':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-3").addClass("active");
            $("#option-3").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.08;
            setResults();
            break;

        case 'btn-4':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-4").addClass("active");
            $("#option-4").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.15;
            setResults();
            break;
    }
}

function selectBundle(event) {
    var bundle = event.srcElement.id;

    switch (bundle) {
        case 'bundle-1':
            investment = 5995;
            $("#" + bundle).addClass("selected");
            $("#" + bundle).siblings().removeClass("selected");
            $('#result-1').html("€" + investment);
            $('#casks-title').html('Investment cost for 2 casks:')
            setResults();
            break;

        case 'bundle-2':
            investment = 13995;
            $("#" + bundle).addClass("selected");
            $("#" + bundle).siblings().removeClass("selected");
            $('#result-1').html("€" + investment);
            $('#casks-title').html('Investment cost for 5 casks:')
            setResults();
            break;

        case 'bundle-3':
            investment = 26995;
            $("#" + bundle).addClass("selected");
            $("#" + bundle).siblings().removeClass("selected");
            $('#result-1').html("€" + investment);
            $('#casks-title').html('Investment cost for 10 casks:')
            setResults();
            break;

        case 'bundle-4':
            investment = 38495;
            $("#" + bundle).addClass("selected");
            $("#" + bundle).siblings().removeClass("selected");
            $('#result-1').html("€" + investment);
            $('#casks-title').html('Investment cost for 15 casks:')
            setResults();
            break;

        case 'bundle-5':
            investment = 59995;
            $("#" + bundle).addClass("selected");
            $("#" + bundle).siblings().removeClass("selected");
            $('#result-1').html("€" + investment);
            $('#casks-title').html('Investment cost for 25 casks:')
            setResults();
            break;
    }

}



function setResults() {

    var years = slider2.value;
    var rate = getRate(years);
    console.log(rate);

    var grossReturn = investment*rate*years/100;
    output2.innerHTML = years + ' years';

    let grossReturnLower = .9*grossReturn;
    let grossReturnUpper = 1.1*grossReturn;
    result2.innerHTML = '€' + grossReturnLower.toFixed(0) + ' - €' + grossReturnUpper.toFixed(0);

}

function getRate(years){
    return 4.085714 + 0.1857143*years + 0.1057143*Math.pow(years, 2);
}

