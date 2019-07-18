var trackEnum = { click: "click", open: "open", pixel: "pixel" };

function colectFormData() {
    return {
        Email: $("#Email").val() ? $("#Email").val() : decodeURI(getUrlVars().Email),
        FirstName: $("#FirstName").val() ? $("#FirstName").val() : decodeURI(getUrlVars().FirstName),
        LastName: $("#LastName").val() ? $("#LastName").val() : decodeURI(getUrlVars().LastName),
        Company: $("#Company").val() ? $("#Company").val() : decodeURI(getUrlVars().Company),
        Address: $("#Address").val() ? $("#Address").val() : decodeURI(getUrlVars().Address),
        City: $("#City").val() ? $("#City").val() : decodeURI(getUrlVars().City),
        State: $("#State").val() ? $("#State").val() : decodeURI(getUrlVars().State),
        Zip: $("#Zip").val() ? $("#Zip").val() : decodeURI(getUrlVars().State),
        Country: $("#Country").val() ? $("#Country").val() : decodeURI(getUrlVars().Country),
        Phone: $("#Phone").val() ? $("#Phone").val() : decodeURI(getUrlVars().Phone),
        JobTitle: $("#JobTitle").val() ? $("#JobTitle").val() : decodeURI(getUrlVars().JobTitle),
        Revenue: $("#Revenue").val() ? $("#Revenue").val() : decodeURI(getUrlVars().Revenue),
        EmployeeSize: $("#EmployeeSize").val() ? $("#EmployeeSize").val() : decodeURI(getUrlVars().EmployeeSize),
        Industry: $("#Industry").val() ? $("#Industry").val() : decodeURI(getUrlVars().Industry),
        CustomQuestion1: $("#CustomQuestion1").val() ? $("#CustomQuestion1").val() : decodeURI(getUrlVars().CustomQuestion1),
        CustomQuestion2: $("#CustomQuestion2").val() ? $("#CustomQuestion2").val() : decodeURI(getUrlVars().CustomQuestion2),
        CustomQuestion3: $("#CustomQuestion3").val() ? $("#CustomQuestion3").val() : decodeURI(getUrlVars().CustomQuestion3),
        CustomQuestion4: $("#CustomQuestion4").val() ? $("#CustomQuestion4").val() : decodeURI(getUrlVars().CustomQuestion4),
        CustomQuestion5: $("#CustomQuestion5").val() ? $("#CustomQuestion5").val() : decodeURI(getUrlVars().CustomQuestion5),
        OptIn: $("#OptIn").is(":checked"),
        CampaignName: $("#CampaignName").val()
    };
}

function PostDataFormSubmit(data, thankYouURL, track) {
    data.Track = track.toLowerCase();
    $.ajax({
        type: 'Post',
        url: '../api/LandingPageTrack',
        data: JSON.stringify(data),
        success: function (data) {
            if (thankYouURL != null && thankYouURL != "") {
                window.location = thankYouURL;
            }
        },
        contentType: "application/json",
        dataType: 'json'
    });
}

function getUrlVars() {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        //vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function hideQueryStringFields() {

    var queryStringValues = getUrlVars();

    if (queryStringValues != null) {
        if (queryStringValues.FirstName) {
            $("#FirstName").val(decodeURI(queryStringValues.FirstName));
            $("#divFirstName").hide();
            $('#FirstName').removeAttr('required');
        }
        if (queryStringValues.LastName) {
            $("#LastName").val(decodeURI(queryStringValues.LastName));
            $("#divLastName").hide();
            $('#LastName').removeAttr('required');
        }
        if (queryStringValues.Company) {
            $("#Company").val(decodeURI(queryStringValues.Company));
            $("#divCompany").hide();
            $('#Company').removeAttr('required');
        }
        if (queryStringValues.Address) {
            $("#Address").val(decodeURI(queryStringValues.Address));
            $("#divAddress").hide();
            $('#Address').removeAttr('required');
        }
        if (queryStringValues.City) {
            $("#City").val(decodeURI(queryStringValues.City));
            $("#divCity").hide();
            $('#City').removeAttr('required');
        }
        if (queryStringValues.State) {
            $("#State").val(decodeURI(queryStringValues.State));
            $("#divState").hide();
            $('#State').removeAttr('required');
        }
        if (queryStringValues.Zip) {
            $("#Zip").val(decodeURI(queryStringValues.Zip));
            $("#divZip").hide();
            $('#Zip').removeAttr('required');
        }
        if (queryStringValues.Country) {
            $("#Country").val(decodeURI(queryStringValues.Country));
            $("#divCountry").hide();
            $('#Country').removeAttr('required');
        }
        if (queryStringValues.Phone) {
            $("#Phone").val(decodeURI(queryStringValues.Phone));
            $("#divPhone").hide();
            $('#Phone').removeAttr('required');
        }
        if (queryStringValues.JobTitle) {
            $("#JobTitle").val(decodeURI(queryStringValues.JobTitle));
            $("#divJobTitle").hide();
            $('#JobTitle').removeAttr('required');
        }
        if (queryStringValues.Revenue) {
            $("#Revenue").val(decodeURI(queryStringValues.Revenue));
            $("#divRevenue").hide();
            $('#Revenue').removeAttr('required');
        }
        if (queryStringValues.EmployeeSize) {
            $("#EmployeeSize").val(decodeURI(queryStringValues.EmployeeSize));
            $("#divEmployeeSize").hide();
            $('#EmployeeSize').removeAttr('required');
        }
        if (queryStringValues.Industry) {
            $("#Industry").val(decodeURI(queryStringValues.Industry));
            $("#divIndustry").hide();
            $('#Industry').removeAttr('required');
        }
        if (queryStringValues.CustomQuestion1) {
            $("#CustomQuestion1").val(decodeURI(queryStringValues.CustomQuestion1));
            $("#divCustomQuestion1").hide();
            $('#CustomQuestion1').removeAttr('required');
        }
        if (queryStringValues.CustomQuestion2) {
            $("#CustomQuestion2").val(decodeURI(queryStringValues.CustomQuestion2));
            $("#divCustomQuestion2").hide();
            $('#CustomQuestion2').removeAttr('required');
        }
        if (queryStringValues.CustomQuestion3) {
            $("#CustomQuestion3").val(decodeURI(queryStringValues.CustomQuestion3));
            $("#divCustomQuestion3").hide();
            $('#CustomQuestion3').removeAttr('required');
        }
        if (queryStringValues.CustomQuestion4) {
            $("#CustomQuestion4").val(decodeURI(queryStringValues.CustomQuestion4));
            $("#divCustomQuestion4").hide();
            $('#CustomQuestion4').removeAttr('required');
        }
        if (queryStringValues.CustomQuestion5) {
            $("#CustomQuestion5").val(decodeURI(queryStringValues.CustomQuestion5));
            $("#divCustomQuestion5").hide();
            $('#CustomQuestion5').removeAttr('required');
        }
        if (queryStringValues.Email) {
            $("#Email").val(decodeURI(queryStringValues.Email));
            $("#divEmail").hide();
            $('#Email').removeAttr('required');
            if (queryStringValues.Track) {
                PostDataFormSubmit(colectFormData(), "", trackEnum.pixel);
            }
            else {
                PostDataFormSubmit(colectFormData(), "", trackEnum.open);
            }
        }
    }
}
